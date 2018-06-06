import { Directive, OnInit, TemplateRef } from '@angular/core';
import { SidenavService } from './sidenav.service';

@Directive({
  selector: '[HeaderContent]',
})
export class SidenavDirective implements OnInit {
  constructor(private sidenavService: SidenavService, private ref: TemplateRef<any>) {}

  ngOnInit(): void {
    this.sidenavService.setContents(this.ref);
  }
}
