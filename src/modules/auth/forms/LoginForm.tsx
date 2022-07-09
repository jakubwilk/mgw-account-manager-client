import { useForm, zodResolver } from '@mantine/form'
import { loginSchema } from '@auth/models'
import { Alert, Button, Input, Text, createStyles } from '@mantine/core'
import { IconAlertCircle } from '@tabler/icons'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'
import { useLogin } from '@auth/hooks'

const useStyles = createStyles((theme) => ({
  headingText: {
    color: theme.colors.gray[7],
  },
}))

function LoginForm() {
  const { classes } = useStyles()
  const { t } = useTranslation()
  const { handleSubmit, error, isSubmitting } = useLogin()
  const form = useForm({
    schema: zodResolver(loginSchema),
    initialValues: {
      username: '',
      password: '',
    },
  })

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Text className={clsx('text-center', 'mb-4', classes.headingText)}>{t('auth:description')}</Text>
      {error.isError && (
        <Alert icon={<IconAlertCircle size={16} />} title={t('auth:validation.title')} color={'red'} className={clsx('mb-8')}>
          {error.message}
        </Alert>
      )}
      <Input size={'md'} {...form.getInputProps('username')} placeholder={t('auth:fields.username')} className={clsx('mb-4')} required />
      <Input
        size={'md'}
        {...form.getInputProps('password')}
        type={'password'}
        placeholder={t('auth:fields.password')}
        className={clsx('mb-4')}
        required
      />
      <Button
        size={'md'}
        type={'submit'}
        className={clsx('uppercase tracking-normal', 'text-sm')}
        loading={isSubmitting}
        disabled={isSubmitting}
        fullWidth
      >
        {t('auth:actions.login')}
      </Button>
    </form>
  )
}

export default LoginForm
