import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  template:
  `
    <div fxLayout="row" fxFlexFill fxLayoutAlign="center center">
      <div class="grid-container" fxFlex> 
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
    `.grid-container {
      margin: 6em 2em 6em 2em;
      min-height: calc(100vh - 540px);
    }`
]
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
