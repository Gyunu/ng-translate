import { Injectable, Pipe } from '@angular/core';

import { TranslationService } from '../services/translation.service';
import { LocaleService } from '../services/locale.service';

/*
  Generated class for the Translation pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'translate'
})
@Injectable()
export class TranslationPipe {

  constructor(
    private translation: TranslationService,
    private locale: LocaleService
  ) {

  }
  /*
  Takes a string identifier and returns the translated string depending on the current locale or an arg.
  */
  transform(value, interpolation = {}) {
    return this.translation.get(value, interpolation) || value;
  }
}
