export const initialState = {
  avatar: '',
  lastMeditation: '',
};

export const UserReducer = (
  state: any,
  action: {type: any; payload: {avatar: any}},
) => {
  switch (action.type) {
    case 'setAvatar':
      return {...state, avatar: action.payload.avatar};

    default:
      return state;
  }
};
