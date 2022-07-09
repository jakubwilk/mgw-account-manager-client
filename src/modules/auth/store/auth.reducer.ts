import { AuthActionsEnum, IAuthContext, IAuthDispatch } from '@auth/models'

export const authReducer = (state: IAuthContext, action: IAuthDispatch) => {
  switch (action.type) {
    case AuthActionsEnum.INITIALIZE_USER:
      return {
        ...state,
        isUser: true,
      }
    case AuthActionsEnum.REMOVE_USER:
      return {
        ...state,
        isUser: false,
      }
    default:
      return state
  }
}

export const initialState: IAuthContext = {
  isUser: false,
}
