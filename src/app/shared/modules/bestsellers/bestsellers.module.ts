import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestsellersComponent } from './components/bestsellers/bestsellers.component';



@NgModule({
  declarations: [
    BestsellersComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BestsellersComponent
  ]
})
export class BestsellersModule { }
