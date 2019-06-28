import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomeADSPage } from '../pages/home-ads/home-ads';
import { BuscarPratoPage } from '../pages/buscar-prato/buscar-prato';
import { BebidasPage } from '../pages/bebidas/bebidas';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { PerfilPage } from '../pages/perfil/perfil';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomeADSPage,
    BuscarPratoPage,
    BebidasPage,
    TabsControllerPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeADSPage,
    BuscarPratoPage,
    BebidasPage,
    TabsControllerPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}