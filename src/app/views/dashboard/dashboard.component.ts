import { Component } from '@angular/core';
import { SidenavComponent } from '../../shared/sidenav/sidenav.component';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cols: number = 2;
  private shouldMaximizeCards: boolean = true;
  constructor(private sidenav: SidenavComponent) {}

  private calculateColSpan(colSpan: number): number {
    return this.shouldMaximizeCards ? this.cols : colSpan;
  }

  ngOnInit() {
    this.sidenav.isHandset$.subscribe(
      (isHandset) => {
        this.shouldMaximizeCards = isHandset;
      }
    )
  }
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
