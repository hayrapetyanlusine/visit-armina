import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FullScreenImgService {
  public isOpen = signal<boolean>(false);
  public selectedImg = signal<string>('');

  openFullscreen(img: string): void {
    this.selectedImg.set(img);
    this.isOpen.set(true);
  }

  closeFullscreen(): void {
    this.isOpen.set(false);
  }
}
