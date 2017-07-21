import {Component, OnInit} from '@angular/core';

import {NgRedux} from '@angular-redux/store';

import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.css']
})
export class SingleMessageComponent implements OnInit {
  currentMessage;

  constructor(public ngRedux: NgRedux<AppState>) {
    this.ngRedux.select<string>('currentMessageContent')
      .subscribe(data => this.currentMessage = data);
  }

  ngOnInit() {
    this.ngRedux.select<any>('currentMessageCollection')
      .subscribe(data => {
        if (data.length) {
          this.currentMessage = data[0].content;
        }
      });
  }
}
