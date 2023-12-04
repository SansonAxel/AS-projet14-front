export const CHANGE_INFO_FIELD = 'CHANGE_INFO_FIELD';

export const changeInfoField = (newValue, identifier) => ({
  type: CHANGE_INFO_FIELD,
  newValue,
  identifier,
});
