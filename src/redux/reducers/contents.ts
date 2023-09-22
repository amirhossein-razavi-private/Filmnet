import { IActions } from '../../types/interfaces';

const initialState = {
  loading: false,
  contents: [],
  next_url: '',
};

export default (state = initialState, action: IActions) => {
  switch (action.type) {
    case 'ON_CONTENTS_CHANGE': {
      const { prop, value } = action.payload;
      return {
        ...state,
        [prop]: value,
      };
    }
    case 'GET_CONTENTS': {
      const { data, meta: { next_url } } = action.payload;
      return {
        ...state,
        contents: [...state.contents, ...data],
        next_url,
        loading: false,
      };
    }
    default:
      return state;
  }
};
