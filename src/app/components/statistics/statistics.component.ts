import {Component, OnInit} from '@angular/core';
import {NgRedux} from "@angular-redux/store/lib/src";
import {AppState} from '../../store/app.state';
import {Message} from '../../models/Message';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  constructor(public ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.ngRedux.select<Message>('currentMessage')
      .filter(message => {return message.content; })
      .subscribe(message => {
        let letterMap = {};
        let messageContent = this.replaceHtmlTags(message.content);

        messageContent.split('').forEach(char => {
          char = char.toLocaleLowerCase();
          if (letterMap.hasOwnProperty(char)) {
            letterMap[char] += 1;
          } else {
            letterMap[char] = 1;
          }
        });
        console.log('LETER MAP', letterMap);
      });
  }

  replaceHtmlTags(str: string): string {
    return str.replace(/<.*>/, '');
  }

}
