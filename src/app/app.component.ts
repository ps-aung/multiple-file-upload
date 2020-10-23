import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'multiple-file-upload';

  onCompleteItem($event) {
    console.log($event);
  }
}
