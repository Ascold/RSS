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
  currentChannel: Array<any> = [];

  constructor(public ngRedux: NgRedux<AppState>) {
    this.ngRedux.select<Array<any>>('channel')
      .subscribe(data => data.forEach(
        x => { this.currentChannel.push(new Message(x)); }));
    console.log(this.currentChannel);
  }

  ngOnInit() {
    // this.ngRedux.select<string>('channel')
    //   .subscribe(data => this.currentChannel = data);
    // setTimeout((console.log(this.currentChannel)), 3000);
  }

}
