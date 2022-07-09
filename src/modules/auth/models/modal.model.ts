import { Dispatch } from 'react'

export enum AuthModalActionsEnum {
  // eslint-disable-next-line no-unused-vars
  OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL',
  // eslint-disable-next-line no-unused-vars
  CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL',
}

export interface IAuthModalContext {
  isLoginModal: boolean
}

export interface IAuthModalDispatch {
  type: AuthModalActionsEnum
  payload: IAuthModalContext
}

export interface IAuthModal {
  state: IAuthModalContext
  dispatch: Dispatch<IAuthModalDispatch>
}
