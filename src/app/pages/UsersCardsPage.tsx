import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { LoginModal } from '@auth/components'

function UsersCardsPage() {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Helmet>
        <title>{t('pages:cardsList.title')}</title>
      </Helmet>
      <LoginModal />
    </Fragment>
  )
}

export default UsersCardsPage
