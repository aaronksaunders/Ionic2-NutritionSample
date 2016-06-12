import 'es6-shim';
import {Component} from '@angular/core';
import {ionicBootstrap, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {Page1} from './pages/page1/page1';
import { HTTP_PROVIDERS }   from '@angular/http';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
})
export class MyApp {
  rootPage: any = Page1;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);