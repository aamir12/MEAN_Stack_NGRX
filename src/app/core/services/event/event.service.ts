import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  private loadingEvent = new EventEmitter<boolean>()

  constructor() { }

  /**
   * For Global Loader
   * @returns 
   */
  getLoadingEvent(): EventEmitter<boolean> {
    return this.loadingEvent;
  }

  /**
   * For Start Loader
   */
  startLoading(): void {
    this.loadingEvent.emit(true);
  }

  /**
   * For Stop Loader
   */
  stopLoading(): void {
    this.loadingEvent.emit(false);
  }
}
