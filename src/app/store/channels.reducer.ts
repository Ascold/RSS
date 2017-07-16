import {Message} from '../models/Message';

export function channelsReducer(state: Array<any> = [], action: any) {
  switch (action.type) {
    case 'SET_CHANNEL':
      console.log("ChannelReducer#SET_Channel");
      return action.channel;
    case 'ADD_CHANNEL':
      console.log("ChannelReducer#ADD_Channel");
      return [...state, action.channel];
    case 'DELETE_CHANNEL':
      console.log("ChannelReducer#DELETE_TIMER");
      let index = state.findIndex(t => t.title === action.channel.title);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    default:
      return state;
  }
}
