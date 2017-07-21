import { combineReducers } from 'redux';

import {AppState} from './app.state';
import {channelsReducer} from './channels.reducer';
import {singleMessageReducer} from './single.message.reducer';

export const rootReducer = combineReducers<AppState>({
  currentMessageCollection: channelsReducer,
  currentMessageContent: singleMessageReducer
});
