import {
  TEST_ACTION_TYPE,
  GET_DOGS_SUCCESS,
  GET_DOGS_FAIL,
  GET_DOGS_REQUESTED,
} from '../actions/TestAction';

const TEST_ACTION_TYPE_DEFAULT_STATE = {
  dogUrl: '',
  payload: 0,
};


const TestReducer = (state = TEST_ACTION_TYPE_DEFAULT_STATE, action) => {
  const { type, payload, dogUrl } = action;
  switch (type) {
    case TEST_ACTION_TYPE: {
      const newPayload = payload + 5;
      return {
        ...state,
        payload: newPayload,
      };
    }
    case GET_DOGS_REQUESTED: {
      return {
        ...state,
        dogUrl: 'requested',
      };
    }
    case GET_DOGS_SUCCESS: {
      return {
        ...state,
        dogUrl,
      };
    }
    case GET_DOGS_FAIL: {
      return {
        ...state,
        dogUrl: 'failed',
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default TestReducer;
