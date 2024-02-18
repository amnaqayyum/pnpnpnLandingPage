import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountUpModule } from 'ngx-countup';
import { ROUTES, RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WelcomeComponent } from './welcome/welcome.component';
import { HeroComponent } from './welcome/hero/hero.component'; 
import { StatsCounterComponent } from './welcome/stats-counter/stats-counter.component';
import { CardSliderComponent } from './welcome/card-slider/card-slider.component';
import { ProductAccordionComponent } from './welcome/product-accordion/product-accordion.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeroComponent, 
    StatsCounterComponent,
    CardSliderComponent,
    ProductAccordionComponent,
  ],
  imports: [
    BrowserModule,
    CountUpModule,
    RouterModule,
    CarouselModule, 
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
