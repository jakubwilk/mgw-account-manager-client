import { createContext, ReactNode, useReducer } from 'react'
import { IAuthModal } from '@auth/models'
import { authModalReducer, initialState } from '@auth/store/modal.reducer'

interface IProps {
  children: ReactNode
}

export const AuthModalContext = createContext<IAuthModal>({
  state: initialState,
  dispatch: () => {},
})

export const AuthModalProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(authModalReducer, initialState)

  return <AuthModalContext.Provider value={{ state, dispatch }}>{children}</AuthModalContext.Provider>
}
