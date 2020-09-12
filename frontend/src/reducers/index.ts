import { combineReducers } from 'redux';
import { authReducer } from './auth-reducer';
import { profileReducer } from './profile-reducer';

export const reducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});
