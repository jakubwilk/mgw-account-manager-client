import { createStyles } from '@mantine/core'
import clsx from 'clsx'
import { LoginPageForm } from '@auth/forms'

const useStyles = createStyles((theme) => ({
  content: {
    backgroundColor: theme.colors.gray[0],
  },
}))

function LoginPageContent() {
  const { classes } = useStyles()

  return (
    <div className={clsx('min-w-full xl:min-h-[500px]', 'xl:rounded-t-md', 'px-8 py-4', classes.content)}>
      <LoginPageForm />
    </div>
  )
}

export default LoginPageContent
