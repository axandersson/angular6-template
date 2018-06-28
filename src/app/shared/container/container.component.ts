import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  template:
  `
    <div fxLayout="row" fxFlexFill fxLayoutAlign="center center">
      <div class="grid-container" 
        fxFlex.gt-xs="400px"
        fxFlex.gt-sm="660px"
        fxFlex.gt-md="1080px"
        fxFlex.gt-lg="1720px">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: ['.grid-container {margin: 6em 2em 6em 2em;min-height: calc(100vh - 540px);}']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
