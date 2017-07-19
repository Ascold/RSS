import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';

import { AppComponent } from './app.component';
import {GetRssService} from './services/get-rss.service';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { SingleMessageComponent } from './components/single-message/single-message.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {AppState} from 'app/store/app.state';
import {rootReducer} from 'app/store/store';



@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    MessageListComponent,
    SingleMessageComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
  ],
  providers: [GetRssService],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    ngRedux: NgRedux<AppState>,
    devTools: DevToolsExtension) {

    const storeEnhancers = devTools.isEnabled() ?
      [ devTools.enhancer() ] :
      [];

    ngRedux.configureStore(
      rootReducer, {channel: [], currentMessageTitle: ''}, // TODO: Read state from local storage
      [],
      storeEnhancers);
  }
}
