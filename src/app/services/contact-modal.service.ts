import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactModalService {
  protected modalOpen = signal(false);

  closeModal(): void {
    this.modalOpen.set(false);
  }

  openModal(): void {
    this.modalOpen.set(true);
  }

  isModalOpen(): boolean {
    return this.modalOpen()
  }
}
