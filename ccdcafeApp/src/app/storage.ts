import { InjectionToken } from '@angular/core';

export const BROWSER_STORAGE = new InjectionToken<Storage>('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

export class Storage {
//  window.localStorage[localStorage] = BROWSER_STORAGE;
//  window.localStorage[localStorage]; // Returns 'Browser Storage'
}
