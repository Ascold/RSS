import {Component, OnInit} from '@angular/core';

import {NgRedux} from '@angular-redux/store';

import {AppState} from '../../store/app.state';
import {Message} from '../../models/Message';

@Component({
  selector: 'app-single-message',
  templateUrl: './single-message.component.html',
  styleUrls: ['./single-message.component.css']
})
export class SingleMessageComponent implements OnInit {
  currentMessage;

  constructor(public ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.ngRedux.select<Message>('currentMessage')
      .subscribe(data => this.currentMessage = data);
  }
}
