import {Component, OnInit} from '@angular/core';

import {NgRedux} from '@angular-redux/store/lib/src';
import {AppState} from '../../store/app.state';

import {Message} from '../../models/Message';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  options: Object;

  constructor(public ngRedux: NgRedux<AppState>) {
  }

  ngOnInit() {
    this.ngRedux.select<Message>('currentMessage')
      .filter(message => {
        return message.content;
      })
      .subscribe(message => {
        const letterMap = {};
        const messageContent = this.replaceHtmlTags(message.content);

        messageContent.split('').forEach(char => {
          char = char.toLocaleLowerCase();
          if (letterMap.hasOwnProperty(char)) {
            letterMap[char] += 1;
          } else {
            letterMap[char] = 1;
          }
        });

        this.setChartData(letterMap, messageContent.length);
      });
  }

  replaceHtmlTags(str: string): string {
    return str.replace(/<.*?>/, '')
      .replace(/[^а-яёА-ЯЁa-zA-Z]/g, '');
    // .replace(/\P{L}/gi, '');

  }

  setChartData(data, contentCount: number) {
    const chartData = [];

    for (const key in data) {
      chartData.push([key, data[key] / contentCount * 100]);
    }


    this.options = {
      chart: {
        type: 'pie',
      },
      credits: {
        enabled: false
      },
      title: {
        text: null
      },
      plotOptions: {
        pie: {
          innerSize: 100,
          depth: 0
        }
      },
      series: [{
        name: 'Percentage of total amount',
        data: chartData
      }],
    };
  }

}
