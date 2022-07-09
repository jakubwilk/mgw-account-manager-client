import { Fragment, ReactElement, useContext, useState } from 'react'
import { AppShell, Burger, Button, Footer, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core'
import { AuthContext, AuthModalContext } from '@auth/store'
import { AuthModalActionsEnum } from '@auth/models'
import { LoginModal } from '@auth/components'
import { useTranslation } from 'react-i18next'

interface IProps {
  header?: ReactElement
  sidebar?: ReactElement
  content?: ReactElement
}

function AppLayout({ header, sidebar, content }: IProps) {
  const theme = useMantineTheme()
  const { t } = useTranslation()
  const authStore = useContext(AuthContext)
  const authModalStore = useContext(AuthModalContext)
  const [opened, setOpened] = useState(false)

  return (
    <Fragment>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint={'sm'}
        asideOffsetBreakpoint={'sm'}
        fixed
        navbar={
          <Navbar p={'md'} hiddenBreakpoint={'sm'} hidden={!opened} width={{ sm: 300, lg: 350 }}>
            {authStore.state.isUser ? (
              <Fragment>
                <Navbar.Section mt={'md'} grow>
                  {'Lorem ipsum'}
                </Navbar.Section>
                <Navbar.Section>
                  <Button color={'red'} fullWidth>
                    {'Wyloguj'}
                  </Button>
                </Navbar.Section>
              </Fragment>
            ) : (
              <Navbar.Section>
                <Button
                  onClick={() => authModalStore.dispatch({ type: AuthModalActionsEnum.OPEN_AUTH_MODAL, payload: { isLoginModal: true } })}
                  fullWidth
                >
                  {t('auth:actions.guestLogin')}
                </Button>
              </Navbar.Section>
            )}
          </Navbar>
        }
        footer={
          <Footer height={60} p={'md'}>
            {'Application footer\r'}
          </Footer>
        }
        header={
          <Header height={70} p={'md'}>
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
                <Burger opened={opened} onClick={() => setOpened((o) => !o)} size={'sm'} color={theme.colors.gray[6]} mr={'xl'} />
              </MediaQuery>

              <Text>{'Application header'}</Text>
            </div>
          </Header>
        }
      >
        <Text>{'Resize app to see responsive navbar in action'}</Text>
      </AppShell>
      <LoginModal />
    </Fragment>
  )
}

export default AppLayout
