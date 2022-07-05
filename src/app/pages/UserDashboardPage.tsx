import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { UserDashboardLayout } from '@layouts'

function UserDashboardPage() {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Helmet>
        <title>{t('pages:userDashboard.title')}</title>
      </Helmet>
      <UserDashboardLayout />
    </Fragment>
  )
}

export default UserDashboardPage
