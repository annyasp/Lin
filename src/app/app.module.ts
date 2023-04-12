import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BackgroundComponent } from './background/background.component';
import { NavComponent } from './nav/nav.component';
import { CustomBtnComponent } from './custom-btn/custom-btn.component';
import { TimerComponent } from './timer/timer.component';
import { ButtonComponent } from './button/button.component';

import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    NavComponent,
    CustomBtnComponent,
    TimerComponent,
    ButtonComponent,

    InputComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
