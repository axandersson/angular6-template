import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './/app-routing.module';
import { NavigationStart, Router } from '@angular/router';
import { MaterialModule } from './material-module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { Test1Component } from './test-components/test1/test1.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { SidenavDirective } from './sidenav/sidenav.directive';
import { Test2Component } from './test-components/test2/test2.component';
import { DefaultContainerComponent } from './containers/default-container/default-container.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    SidenavComponent,
    SidenavDirective,
    Test2Component,
    DefaultContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MaterialModule,
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
