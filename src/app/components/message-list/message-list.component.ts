import { Component, OnInit } from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {AppState} from '../../store/app.state';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  currentChannel;
  constructor(public ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.ngRedux.select<string>('channel')
      .subscribe(data => this.currentChannel = data);
  }

}
