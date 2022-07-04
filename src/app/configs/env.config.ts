const envVars = {
  BASE_URL: 'BASE_URL',
  REQUEST_TIMEOUT: 'REQUEST_TIMEOUT',
}

export const loadEnvVariable = (name: string): string => {
  switch (name) {
    case envVars.BASE_URL:
      return process.env.REACT_APP_BASE_URL as string
    case envVars.REQUEST_TIMEOUT:
      return process.env.REACT_APP_REQUEST_TIMEOUT as string
    default:
      return ''
  }
}
