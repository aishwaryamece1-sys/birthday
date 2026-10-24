/**
 * Soothing ambient music box synthesizer using the Web Audio API.
 * Creates an emotional, gentle acoustic music-box / rhodes melody with no external audio dependencies.
 * OFF by default, respects all autoplay restrictions.
 */

class AmbientMusicEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private intervalId: number | null = null;
  private masterGain: GainNode | null = null;
  private noteIndex: number = 0;

  // Gentle, emotional pentatonic melody notes (frequencies in Hz)
  // Key of E / C#m / A: dreamy, warm, and comforting
  private melody = [
    { freq: 329.63, duration: 1.8 }, // E4
    { freq: 392.00, duration: 1.5 }, // G4
    { freq: 440.00, duration: 2.2 }, // A4
    { freq: 493.88, duration: 1.6 }, // B4
    { freq: 587.33, duration: 2.5 }, // D5
    { freq: 523.25, duration: 1.8 }, // C5
    { freq: 440.00, duration: 2.0 }, // A4
    { freq: 392.00, duration: 2.8 }, // G4
    { freq: 329.63, duration: 2.2 }, // E4
    { freq: 261.63, duration: 2.5 }, // C4
    { freq: 293.66, duration: 1.8 }, // D4
    { freq: 329.63, duration: 3.0 }, // E4
  ];

  private harmonies = [
    [130.81, 196.00], // C3, G3
    [110.00, 164.81], // A2, E3
    [174.61, 220.00], // F3, A3
    [146.83, 220.00], // D3, A3
  ];

  private initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime); // Gentle soothing volume
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playTone(freq: number, duration: number, type: OscillatorType = 'sine', gainMultiplier = 1) {
    if (!this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      // Warm music box envelope (quick attack, long soft exponential decay)
      const now = this.ctx.currentTime;
      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.35 * gainMultiplier, now + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      // Low pass filter for warmth
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, now);

      osc.connect(gain);
      gain.connect(filter);
      filter.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch {
      // Ignore audio glitches safely
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public start() {
    this.initContext();
    this.isPlaying = true;
    this.stepMelody();

    // Play gentle note every ~1.2s to 1.6s
    this.intervalId = window.setInterval(() => {
      this.stepMelody();
    }, 1350);
  }

  private stepMelody() {
    if (!this.isPlaying || !this.ctx) return;

    const note = this.melody[this.noteIndex % this.melody.length];
    this.playTone(note.freq, note.duration, 'sine', 0.8);

    // Subtle chime harmonic overtone
    if (Math.random() > 0.4) {
      setTimeout(() => {
        if (this.isPlaying && this.ctx) {
          this.playTone(note.freq * 2, note.duration * 0.7, 'triangle', 0.25);
        }
      }, 120);
    }

    // Occasional gentle bass harmony note
    if (this.noteIndex % 4 === 0) {
      const chord = this.harmonies[(this.noteIndex / 4) % this.harmonies.length];
      this.playTone(chord[0], 3.5, 'sine', 0.4);
      this.playTone(chord[1], 3.0, 'sine', 0.3);
    }

    this.noteIndex++;
  }

  public stop() {
    this.isPlaying = false;
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientMusic = new AmbientMusicEngine();
