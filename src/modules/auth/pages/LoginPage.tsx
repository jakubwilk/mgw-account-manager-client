import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { createStyles } from '@mantine/core'
import clsx from 'clsx'
import { LoginPageContent } from '@auth/components'

const useStyles = createStyles((theme) => ({
  page: {
    backgroundColor: '#100011',
  },
}))

function LoginPage() {
  const { t } = useTranslation()
  const { classes } = useStyles()

  return (
    <Fragment>
      <Helmet>
        <title>{t('auth:page.title')}</title>
      </Helmet>
      <main className={clsx('min-w-screen min-h-screen', classes.page)}>
        <div className={clsx('container', 'xl:max-w-[60vw]', 'mx-auto')}>
          <div className={clsx('flex items-center xl:items-end justify-center', 'min-h-screen min-w-full', 'py-2 px-4 xl:py-0 xl:px-0')}>
            <LoginPageContent />
          </div>
        </div>
      </main>
    </Fragment>
  )
}

export default LoginPage
