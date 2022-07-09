import { Modal } from '@mantine/core'
import { useContext } from 'react'
import { LoginPageForm } from '@auth/forms'
import { useTranslation } from 'react-i18next'
import { AuthModalContext } from '@auth/store'
import { AuthModalActionsEnum } from '@auth/models'

function LoginModal() {
  const { t } = useTranslation()
  const { state, dispatch } = useContext(AuthModalContext)

  return (
    <Modal
      opened={state.isLoginModal}
      onClose={() => dispatch({ type: AuthModalActionsEnum.CLOSE_AUTH_MODAL, payload: { isLoginModal: false } })}
      title={t('auth:title')}
      styles={{ title: { fontFamily: 'Merriweather, serif' } }}
    >
      <LoginPageForm />
    </Modal>
  )
}

export default LoginModal
