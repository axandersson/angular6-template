import { Component, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SidenavService } from './sidenav.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {

  _current: EmbeddedViewRef<any>|null = null;
  @ViewChild('vcr', {read: ViewContainerRef})
  vcr: ViewContainerRef;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(
    private breakpointObserver: BreakpointObserver, 
    private sidenavService: SidenavService
  ) {}
  

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
