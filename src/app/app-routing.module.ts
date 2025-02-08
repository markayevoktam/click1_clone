import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatChipsModule} from '@angular/material/chips';
import { NavigationComponent } from './component/navigation/navigation.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
