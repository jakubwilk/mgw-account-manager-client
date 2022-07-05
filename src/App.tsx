import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { MantineProvider } from '@mantine/core'
import { UserDashboardPage } from '@pages'
import { LoginPage } from '@auth/pages'

function App() {
  return (
    <BrowserRouter basename={'/'}>
      <MantineProvider
        theme={{
          fontFamily: 'Poppins, sans-serif',
          colors: {
            mgw: ['#F4EEF6', '#DFD1E6', '#CBB3D6', '#B795C6', '#A377B6', '#8E59A6', '#724785', '#553564', '#392442', '#1C1221'],
            mgwSecond: ['#A9658F', '#9B5581', '#8C4471', '#823866', '#742B59', '#67214D', '#5A1842', '#4F0E37', '#42062c', '#2a0221'],
          },
          primaryColor: 'mgw',
        }}
      >
        <HelmetProvider>
          <Routes>
            <Route index element={<LoginPage />} />
            <Route path={'/dashboard'} element={<UserDashboardPage />} />
          </Routes>
        </HelmetProvider>
      </MantineProvider>
    </BrowserRouter>
  )
}

export default App
