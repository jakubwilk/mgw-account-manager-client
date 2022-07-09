import { useCallback, useState } from 'react'
import { ILoginError, ILoginValues } from '@auth/models'
import { useTranslation } from 'react-i18next'

function useLogin() {
  const { t } = useTranslation()
  const [error, setError] = useState<ILoginError>({ isError: false, message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback((values: ILoginValues) => {
    console.log(values)
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
    }, 5000)

    setError({ isError: true, message: t('auth:validation.server.noData') })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { handleSubmit, error, isSubmitting }
}

export default useLogin
