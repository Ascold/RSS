export function singleMessageReducer(state: string = '', action: any) {
  switch (action.type) {
    case 'SET_MESSAGE':
      console.log('MessageReducer#SET_CurrentMessage');
      console.log(action.currentMessageContent);
      return action.currentMessageContent;
    default:
      return state;
  }
}
