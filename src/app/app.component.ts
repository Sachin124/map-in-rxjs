import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'squreNumber';
  constructor() {
    const nums = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    const squareValues = map((val: number) => val * val);
    const squaredNums = squareValues(nums);
    squaredNums.subscribe(value => console.log(`value: ${value}`));
  }
}
