import {Message} from '../models/Message';

export function messagesReducer(state: Array<Message> = [], action: any) {
  switch (action.type) {
    case 'SET_MESSAGES':
      console.log('messagesReducer#SET_MESSAGES');
      console.log(action);
      return action.messages;
    default:
      return state;
  }
}
