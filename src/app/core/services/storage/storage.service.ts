import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }
  /**
   * Add Data into local storage
   * @param key 
   * @param value 
   */
  addItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Remove Itme from local storgae
   * @param key 
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Check value
   * @param key 
   * @returns 
   */
  isExist(key: string): boolean {
    return !!this.getItem(key);
  }

  /**
   * Get value
   * @param key 
   * @returns 
   */
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * 
   */
  removeAll(): void {
    localStorage.clear()
  }
}
