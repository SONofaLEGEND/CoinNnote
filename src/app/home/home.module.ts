import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test/test.component';
import { RouterModule } from '@angular/router';
import { NavbarModule } from "../shared/modules/navbar/navbar.module";
import { BestsellersModule } from "../shared/modules/bestsellers/bestsellers.module";


const routes = [
  {
    path: '',
    component: TestComponent
  }
]

@NgModule({
    declarations: [
        TestComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NavbarModule,
        BestsellersModule
    ]
})
export class HomeModule { }
