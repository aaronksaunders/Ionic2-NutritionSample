import { Page1 } from './../pages/page1/page1';
import { DataService } from './../providers/dataService';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';


import { NgModule, ErrorHandler } from '@angular/core';
import { MyApp } from './app.component';



@NgModule({
  declarations: [
    MyApp,
    Page1
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1
  ],
  providers: [ DataService, { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
