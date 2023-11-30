import 'zone.js';
import {
  Component,
  signal,
  computed,
  ChangeDetectionStrategy,
} from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './main.html',
})
export class App {
  name = 'Angular';
  count = signal(10);
  butter = computed(() => this.count() * 0.1);
  sugar = computed(() => this.count() * 0.05);
  flour = computed(() => this.count() * 0.2);

  // someList = signal<readonly number[]>([0]).asReadonly();
  someList = signal<number[]>([0]).asReadonly();
  sortRev = computed(() => this.someList().sort((a, b) => b - a));
  sort = computed(() => [...this.someList()].sort((a, b) => a - b));

  // sortRev = computed(() => this.someList().sort((a, b) => b - a));
  // sort = computed(() => this.someList().sort((a, b) =>  a-b));

  update(event: Event) {
    const input = event.target as HTMLInputElement;
    this.count.set(parseInt(input.value));
    this.someList().push(getRandomInt(this.someList().length));
    // this.someList.update((val) => {
    //   // val.push( getRandomInt(val.length));
    //   // return val;
    //   return [...val, getRandomInt(val.length)];
    // });
  }
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}

bootstrapApplication(App);
// console.log(getRandomInt(3));
