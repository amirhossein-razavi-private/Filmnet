import { Dispatch } from 'redux'

import sendRequest from '../../lib/connectServer';
import { IActions } from '../../types/interfaces';

export const getContents = (path?: string) => async (dispatch: Dispatch<IActions>) => {
  dispatch({ type: 'ON_CONTENTS_CHANGE', payload: { prop: "loading", value: true } });

  return sendRequest({
    path: path || '/video-contents?count=36&offset=0',
    method: 'GET',
    contentType: 'application/json',
    body: null,
  })
    .then(async (res) => {
      dispatch({ type: 'GET_CONTENTS', payload: res });
      return res;
    })
    .catch(() => {
      dispatch({ type: 'ON_CONTENTS_CHANGE', payload: { prop: "loading", value: false } });
      return false;
    });
};
