import { NgModule, ModuleWithProviders } from '@angular/core';

/*
  Pipes
*/
import { TranslationPipe } from './pipes/index';

/*
  Services
*/
import { LocaleService, TranslationService } from './services/index';


@NgModule({
  declarations: [
    TranslationPipe
  ],
  bootstrap: [],
  exports: [TranslationPipe],
  entryComponents: [],
  providers: []
})
export class TranslationModule {

  static forRoot(): ModuleWithProviders {

    return {
      ngModule: TranslationModule,
      providers: [ LocaleService, TranslationService ]
    }
  }

}
