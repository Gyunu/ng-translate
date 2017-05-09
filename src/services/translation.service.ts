import { Injectable } from '@angular/core';

import { LocaleService } from './locale.service';

@Injectable()
export class TranslationService {

  private translations: any = {};

  constructor(
    private locale: LocaleService
  ) {

  }

  add(locale: string, translations: any) {
    this.translations[locale] = translations;
  }

  get(identifier: string, interpolation = {}) {

    let translatedString = this.translations[this.locale.current.identifier][identifier];

    if(translatedString) {
      for(let inter in interpolation) {
        let replace = `{${inter}}`;
        translatedString = translatedString.replace(new RegExp(replace), interpolation[inter]);
      }
    }

    return translatedString || identifier;


  }
}
