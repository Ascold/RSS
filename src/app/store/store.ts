import { combineReducers } from 'redux';

import {AppState} from './app.state';
import {messagesReducer} from './messages.reducer';
import {currentMessageReducer} from './current.message.reducer';

export const rootReducer = combineReducers<AppState>({
  currentMessagesCollection: messagesReducer,
  currentMessage: currentMessageReducer
});
