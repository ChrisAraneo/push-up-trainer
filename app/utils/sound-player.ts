export class SoundPlayer {
  private audios: Map<string, HTMLAudioElement> = new Map();
  private audio: HTMLAudioElement | null = null;

  load(path: string): void {
    const audio = new Audio(path);
    audio.volume = 0.7;
    this.audios.set(path, audio);
  }

  play(path: string): void {
    try {
      if (this.audio) {
        this.stop();
      }

      if (!this.audios.has(path)) {
        this.load(path);
      }

      this.audio = this.audios.get(path)!;
      const promise = this.audio.play();

      if (promise !== undefined) {
        promise.catch((error) => {
          console.warn('Unable to play sound', error);
        });
      }
    } catch (error) {
      console.warn('Error loading or playing sound', error);
    }
  }

  stop(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
      this.audio = null;
    }
  }
}

export const soundPlayer = new SoundPlayer();
