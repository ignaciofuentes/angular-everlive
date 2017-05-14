import { NgModule } from '@angular/core';
import Everlive from 'everlive-sdk';
export { Everlive };

export interface EverliveConfig {
    appId: string;
    scheme?: 'http'|'https'|null;
    token?: string;
    masterKey?: string;
}

@NgModule()
export class AngularEverliveModule {
  static initialize(config: any) {
    return {
      ngModule: AngularEverliveModule,
      providers: [{provide: Everlive, useValue: new Everlive(config)}]
    };
  }
 }