import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [RootComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ]
})
export class RootModule { }
