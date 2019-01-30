import { TEST_ACTION_TYPE } from '../actions/TestAction';

const TEST_ACTION_TYPE_DEFAULT_STATE = {
  payload: 0,
};

const TestReducer = (state = TEST_ACTION_TYPE_DEFAULT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEST_ACTION_TYPE: {
      const newPayload = payload + 5;
      return {
        ...state,
        payload: newPayload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default TestReducer;
