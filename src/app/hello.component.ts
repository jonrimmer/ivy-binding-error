import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-hello',
  template: `
    <h1>Active: {{ active$ | async }}</h1>
    <div><button (click)="toggle()">Toggle</button></div>
  `,
  styleUrls: ['./hello.component.scss'],
  host: {
    '[class.active]': '(active$ | async) == true'
  }
})
export class HelloComponent {
  activeValue = new BehaviorSubject(false);
  active$ = this.activeValue.asObservable();

  toggle() {
    this.active$.pipe(take(1)).subscribe(val => {
      this.activeValue.next(!val);
    });
  }
}
