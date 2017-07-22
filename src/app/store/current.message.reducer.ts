export function currentMessageReducer(state: object = {}, action: any) {
  switch (action.type) {
    case 'SET_MESSAGE':
      console.log('currentMessageReducer#SET_CurrentMessage');
      return action.currentMessage;
    default:
      return state;
  }
}
