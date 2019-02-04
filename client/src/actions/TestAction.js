import axios from 'axios';

export const TEST_ACTION_TYPE = 'TEST_ACTION_TYPE';
export const GET_DOGS = 'GET_DOGS';
export const GET_DOGS_SUCCESS = 'GET_DOGS_SUCCESS';
export const GET_DOGS_FAIL = 'GET_DOGS_FAIL';
export const GET_DOGS_REQUESTED = 'GET_DOGS_REQUESTED';

export const getDogsSuccess = dogUrl => ({
  type: GET_DOGS_SUCCESS,
  dogUrl: `${dogUrl}111xx`,
});

export const getDogsFail = () => ({
  type: GET_DOGS_FAIL,
});

export const getDogsRequested = () => ({
  type: GET_DOGS_REQUESTED,
});

export const getDog = () => (dispatch) => {
  dispatch(getDogsRequested());
  axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res) => {
      dispatch(getDogsSuccess(res.data.message));
    })
    .catch(() => {
      dispatch(getDogsFail());
    });
};

export const testAction = payload => ({
  type: TEST_ACTION_TYPE,
  payload,
});
