import { ThunkDispatch } from 'redux-thunk';
import { AuthActionsType } from './auth-action-types';
import { ProfileActionsType } from './profile-action-types';
import { InitialStateType } from '../state-types';

export type ActionType = AuthActionsType | ProfileActionsType;

export type DispatchType = ThunkDispatch<InitialStateType, unknown, ActionType>
