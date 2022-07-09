import { useCallback, useContext, useState } from 'react'
import { AuthActionsEnum, AuthModalActionsEnum, ILoginError, ILoginValues } from '@auth/models'
import { useTranslation } from 'react-i18next'
import { AuthContext, AuthModalContext } from '@auth/store'

function useLogin() {
  const { t } = useTranslation()
  const authStore = useContext(AuthContext)
  const authModalStore = useContext(AuthModalContext)
  const [error, setError] = useState<ILoginError>({ isError: false, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback((values: ILoginValues) => {
    console.log(values)
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      authModalStore.dispatch({ type: AuthModalActionsEnum.CLOSE_AUTH_MODAL, payload: { isLoginModal: false } })
      authStore.dispatch({ type: AuthActionsEnum.INITIALIZE_USER, payload: { isUser: true } })
    }, 5000)

    setError({ isError: false, message: t('auth:validation.server.noData') })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { handleSubmit, error, isSubmitting }
}

export default useLogin
