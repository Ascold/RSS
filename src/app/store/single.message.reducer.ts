export function singleMessageReducer(state: string = '', action: any) {
  switch (action.type) {
    case 'SET_MESSAGE':
      console.log('MessageReducer#SET_CurrentMessage');
      return action.currentMessageTitle;
    default:
      return state;
  }
}
