export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const HANDLE_LOGOUT = 'HANDLE_LOGOUT';

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const handleSuccessfulLogin = (
  token,
  firstname,
  lastname,
  role,
  organization,
  structure
) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  token,
  firstname,
  lastname,
  role,
  organization,
  structure,
});

export const handleLogout = () => ({
  type: HANDLE_LOGOUT,
});
