export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

export const handleSuccessfulLogin = (token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  token,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});
