import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Locale } from '../contracts';
import * as Locales from '../locales/index';

@Injectable()
export class LocaleService {

  private _all: Array<Locale> = [];

  private _current: Locale;
  get current(): Locale {
    if(!this._current) {
      return this._default;
    }

    return this._current;
  }

  set current(locale: Locale) {
    this._current = locale;
  }


  private _default: Locale;
  get default(): Locale {
    return this._default;
  }

  set default(locale: Locale) {
    this._default = locale;
  }


  private _available: Array<Locale> = [];
  get available(): Array<Locale> {
    return this._available;
  }

  public add(identifiers: string[]) {
    identifiers.forEach((identifier) => {
      let allowed = this._all.find((locale) => locale.identifier === identifier);
      if(allowed) {
        this._available.push(allowed);
      }
    });
  }

  public isAvailable(identifier: string) {
    return !!(this.available.find((locale) => locale.identifier === identifier));
  }

  public getByIdentifier(identifier: string ) {
    return this._all.find((locale) => locale.identifier === identifier);
  }

  public setCurrent(locale: Locale) {
    this.default = locale;
  }

  constructor(
  ) {
    for(var locale in Locales) {
      this._all.push(Locales[locale]);
    }
  }
}
