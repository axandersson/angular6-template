import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  template:
  `
    <div fxLayout="row" fxFlexFill fxLayoutAlign="center center">
      <div class="grid-container" 
        fxFlex.gt-xs="300px"
        fxFlex.gt-sm="560px"
        fxFlex.gt-md="980px"
        fxFlex.gt-lg="1620px">
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
