export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';

export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  newValue,
  identifier,
});
