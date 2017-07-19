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
  constructor(public ngRedux: NgRedux<AppState>) {
    this.ngRedux.select<string>('channel')
      .subscribe(data => this.currentChannel = data);
  }
  chooseMessage(x) {
    this.ngRedux.dispatch({type: 'SET_MESSAGE', currentMessageTitle: x});
    // console.log(x);
  }

  ngOnInit() {
    // console.log(this.currentChannel);
    // this.ngRedux.dispatch({type: 'SET_MESSAGE', currentMessageTitle: this.currentChannel.title});
  }

}
