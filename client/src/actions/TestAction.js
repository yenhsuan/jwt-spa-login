export const TEST_ACTION_TYPE = 'TEST_ACTION_TYPE';

export const testAction = payload => ({
  type: TEST_ACTION_TYPE,
  payload,
});
