import { createContext, ReactNode, useReducer } from 'react'
import { IAuth } from '@auth/models'
import { authReducer, initialState } from '@auth/store/auth.reducer'

interface IProps {
  children: ReactNode
}

export const AuthContext = createContext<IAuth>({
  state: initialState,
  dispatch: () => {},
})

export const AuthProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(authReducer, initialState)

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}
