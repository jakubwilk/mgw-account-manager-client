import { Modal } from '@mantine/core'
import { useState } from 'react'
import { LoginPageForm } from '@auth/forms'
import { useTranslation } from 'react-i18next'

function LoginModal() {
  const { t } = useTranslation()
  const [opened, setOpened] = useState(true)

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title={t('auth:title')}
      styles={{ title: { fontFamily: 'Merriweather, serif' } }}
    >
      <LoginPageForm />
    </Modal>
  )
}

export default LoginModal
