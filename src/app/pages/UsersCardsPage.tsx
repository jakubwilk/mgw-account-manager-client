import { Fragment } from 'react'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import AppLayout from '@layouts/AppLayout'

function UsersCardsPage() {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Helmet>
        <title>{t('pages:cardsList.title')}</title>
      </Helmet>
      <AppLayout />
    </Fragment>
  )
}

export default UsersCardsPage
