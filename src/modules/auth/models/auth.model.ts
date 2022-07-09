import { Dispatch } from 'react'

export enum AuthActionsEnum {
  // eslint-disable-next-line no-unused-vars
  INITIALIZE_USER = 'INITIALIZE_USER',
  // eslint-disable-next-line no-unused-vars
  REMOVE_USER = 'REMOVE_USER',
}

export interface IAuthContext {
  isUser: boolean
}

export interface IAuthDispatch {
  type: AuthActionsEnum
  payload: IAuthContext
}

export interface IAuth {
  state: IAuthContext
  dispatch: Dispatch<IAuthDispatch>
}
