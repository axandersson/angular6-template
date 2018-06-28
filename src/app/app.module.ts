import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavigationStart, Router } from '@angular/router';
import { MaterialModule } from './material-module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { Test1Component } from './test-components/test1/test1.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SidenavService } from './shared/sidenav/sidenav.service';
import { SidenavDirective } from './shared/sidenav/sidenav.directive';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { ContainerComponent } from './shared/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    SidenavComponent,
    SidenavDirective,
    DashboardComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(router: Router, leftNav: SidenavService) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        leftNav.clearContents();
      }
    })
  }

}
