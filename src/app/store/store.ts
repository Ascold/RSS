import { combineReducers } from 'redux';
import {AppState} from './app.state';
import {channelsReducer} from './channels.reducer';

export const rootReducer = combineReducers<AppState>({
  channel: channelsReducer,
});
