import { IAuthModalContext, IAuthModalDispatch } from '@auth/models/modal.model'
import { AuthModalActionsEnum } from '@auth/models'

export const authModalReducer = (state: IAuthModalContext, action: IAuthModalDispatch) => {
  switch (action.type) {
    case AuthModalActionsEnum.OPEN_AUTH_MODAL:
      return {
        ...state,
        isLoginModal: true,
      }
    case AuthModalActionsEnum.CLOSE_AUTH_MODAL:
      return {
        ...state,
        isLoginModal: false,
      }
    default:
      return state
  }
}

export const initialState: IAuthModalContext = {
  isLoginModal: false,
}
