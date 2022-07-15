import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public SELECTED_COVERAGE = 'SELECTED_COVERAGE';

  public NEXT_PAGE = 'NEXT_PAGE';

  public TEMP_TOKEN = 'TEMP_TOKEN'

  public REMEMBER_ME = 'REMEMBER_ME';

  constructor() { }

  /**
   * Add Selected covarges into local storage
   * @param selected 
   */
  addSelectedCoverages(selected: number[]): void {
    this.addItem(this.SELECTED_COVERAGE, JSON.stringify(selected));
  }

  /**
   * Remove Selected covarges from local storage
   */
  removeSelectedCoverages(): void {
    this.removeItem(this.SELECTED_COVERAGE);
  }

  /**
   * 
   * @returns 
   */
  getSelectedCoverages(): any[] {
    // If Present
    if (this.isExist(this.SELECTED_COVERAGE)) {

      const Selected = this.getItem(this.SELECTED_COVERAGE);

      return <any[]>JSON.parse((Selected == null) ? "" : Selected);
    }
    // Not Prersent
    return [];
  }

  /**
   * 
   * @param nextPage 
   */
  addNextPage(nextPage: string): void {
    this.addItem(this.NEXT_PAGE, nextPage);
  }

  /**
   * 
   * @returns 
   */
  getNextPage(): string {
    if (this.isExist(this.NEXT_PAGE)) {
      return this.getItem(this.NEXT_PAGE) || '';
    }
    return ''
  }

  /**
   *  Remove Next Page
   */
  removeNextPage(): void {
    this.removeItem(this.NEXT_PAGE);
  }

  /**
   * Add token
   * @param token 
   */
  addTempToken(token: string): void {
    this.addItem(this.TEMP_TOKEN, token);
  }

  /**
   * Get temp token
   * @returns 
   */
  getTempToken(): string | null {
    return this.getItem(this.TEMP_TOKEN);
  }

  /**
   * Remove temp token
   */
  removeTempToken(): void {
    this.removeItem(this.TEMP_TOKEN);
  }

  /**
   * 
   * @param rememberMe 
   */
  addRememberMe(rememberMe: boolean): void {
    this.addItem(this.REMEMBER_ME, rememberMe ? 'YES' : 'NO');
  }

  /**
   * 
   * @returns 
   */
  getRememberMe(): string | null {
    return this.getItem(this.REMEMBER_ME);
  }

  /**
   * 
   */
  removeRememberMe(): void {
    this.removeItem(this.REMEMBER_ME);
  }

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
