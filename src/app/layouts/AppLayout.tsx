import { Fragment, ReactElement, useContext, useState } from 'react'
import { AppShell, Burger, Footer, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core'
import { AuthContext, AuthModalContext } from '@auth/store'
import { AuthModalActionsEnum } from '@auth/models'
import { LoginModal } from '@auth/components'

interface IProps {
  header?: ReactElement
  sidebar?: ReactElement
  content?: ReactElement
}

function AppLayout({ header, sidebar, content }: IProps) {
  const theme = useMantineTheme()
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
            <Navbar.Section mt={'md'} grow>
              {'linki\r'}
            </Navbar.Section>
            <Navbar.Section>
              {authStore.state.isUser ? (
                <p>{'user logged'}</p>
              ) : (
                <button
                  onClick={() => authModalStore.dispatch({ type: AuthModalActionsEnum.OPEN_AUTH_MODAL, payload: { isLoginModal: true } })}
                >
                  {'Zaloguj\r'}
                </button>
              )}
            </Navbar.Section>
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
