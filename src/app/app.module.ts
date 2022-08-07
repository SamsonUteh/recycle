import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { AppStoreModule } from './store/AppStoreModule';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, StoreModule.forRoot({}, {}),
  ...AppStoreModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
