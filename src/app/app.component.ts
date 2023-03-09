import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  count = 0;

  add() {
    this.count++;
  }

  addAsync() {
    setTimeout(() => {
      this.count++;
    });
  }
}
