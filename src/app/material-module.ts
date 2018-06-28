import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatCheckboxModule, 
  MatToolbarModule, 
  MatButtonModule,
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatDividerModule
} from '@angular/material';

/**
 * NgModule that includes all Material modules that are required to serve the app.
 */
@NgModule({
  exports: [
    LayoutModule,
    MatButtonModule, 
    MatCheckboxModule,    
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule
  ],
})
export class MaterialModule { }