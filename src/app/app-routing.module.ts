import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Test1Component } from './test-components/test1/test1.component'
import { Test2Component } from './test-components/test2/test2.component'

const routes: Routes = [
  { path: '', redirectTo: '/test1', pathMatch: 'full'},
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },

];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {
  
 }
