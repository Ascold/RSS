import {Message} from 'app/models/Message';

export interface AppState {
  currentMessageCollection: Message[];
  currentMessageContent: string;
}
