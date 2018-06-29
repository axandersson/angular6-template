import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EmbeddedViewRef, ViewChild, ViewContainerRef } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavService } from './sidenav.service';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  @ViewChild('drawer') public sidenav: MatSidenav;

  @ViewChild('vcr', { read: ViewContainerRef })
    private vcr: ViewContainerRef;

  _current: EmbeddedViewRef<any> | null = null;


  public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sidenavService: SidenavService
  ) { }



  ngAfterViewInit(): void {
    this
      .sidenavService
      .contents
      .subscribe(ref => {
        if (this._current !== null) {
          this._current.destroy();
          this._current = null;
        }
        if (ref === null) {
          return;
        }
        this._current = this.vcr.createEmbeddedView(ref);
      });
  }

}
