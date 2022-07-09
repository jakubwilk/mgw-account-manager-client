export interface ILoginResponseSuccess {}

export interface ILoginResponseError {
  statusCode: number
  message: string
}

export interface ILoginError {
  isError: boolean
  message: string
}
