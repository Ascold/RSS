import {Message} from 'app/models/Message';

export interface AppState {
  currentMessagesCollection: Message[];
  currentMessage: Message;
}
