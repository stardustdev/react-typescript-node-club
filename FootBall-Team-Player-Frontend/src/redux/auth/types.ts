export enum AuthActionTypes {
  SIGNIN_REQUEST = 'SIGNIN_REQUEST',
  SIGNIN_REQUEST_SUCCESS = 'SIGNIN_REQUEST_SUCCESS',
  SIGNIN_REQUEST_ERROR = 'SIGNIN_REQUEST_ERROR',

  SIGNUP_REQUEST = 'SIGNUP_REQUEST',
  SIGNUP_REQUEST_SUCESS = 'SIGNUP_REQUEST_SUCCESS',
  SIGNUP_REQUEST_ERROR = 'SIGNUP_REQUEST_ERROR',

  SIGNOUT_REQUEST = 'SIGNOUT_REQUEST',
  SIGNOUT_REQUEST_SUCCESS = 'SIGNOUT_REQUEST_SUCCESS',
  SIGNOUT_REQUEST_ERROR = 'SIGNOUT_REQUEST_ERROR',

  FORGOT_PASSWORD = 'FORGOT_PASSWORD',

  UPDATE_PROFILE = 'UPDATE_PROFILE',
  UPDATE_PROFILE_SUCESS = 'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR',
}

export interface User {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}

export type Maybe<T> = T | undefined | null;

export interface AuthState {
  user: Maybe<User>;
  error: Maybe<string>;
}
