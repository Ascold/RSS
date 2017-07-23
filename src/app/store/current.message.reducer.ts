export function currentMessageReducer(state: object = {}, action: any) {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.currentMessage;
    default:
      return state;
  }
}
