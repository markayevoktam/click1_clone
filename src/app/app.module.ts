import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { material_imports } from './shared/material-import';
import { NavigationComponent } from './component/navigation/navigation.component';
import { SwiperComponent } from './component/swiper/swiper.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SwiperComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ...material_imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
