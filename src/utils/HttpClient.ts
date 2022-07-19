import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios'
import { store } from 'store'

export class HttpClient {
  private baseInstance: AxiosInstance
  constructor() {
    this.baseInstance = axios.create()
    this.useInterceptors()
  }

  request(config: AxiosRequestConfig) {
    const accessToken: string = store.getState()?.authReducer?.accessToken
    return this.baseInstance({
      method: config.method,
      url: `${process.env.REACT_APP_API_URL}${config.url}`,
      ...(config.data && { data: config.data }),
      responseType: config.responseType,
      headers: {
        'Content-Type': 'application/json',
        ...(accessToken && {
          Authorization: this.getAuthHeader(accessToken),
        }),
        ...config.headers,
      },
      params: config.params,
      withCredentials: true,
      credentials: 'include',
      timeout: config.timeout || 15000,
    })
  }

  private getAuthHeader(token: string) {
    if (token) {
      return `Bearer ${token}`
    } else {
      return ''
    }
  }

  private useInterceptors() {
    this.baseInstance.interceptors.request.use(
      (config) => config,
      (error) => Promise.reject(error),
    )

    this.baseInstance.interceptors.response.use((response) => response, this.catchErrors)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private catchErrors(error: AxiosError | any) {
    if (!error.response && !error.status) {
      // network error
      return Promise.reject(error)
    }

    if (error?.response?.status === 401) {
      // unAuthorized
      return Promise.reject(error)
    }

    if (error?.response?.status >= 500) {
      // internal server error
    }

    // unCaught error
    return Promise.reject(error)
  }
}

export const httpClient = new HttpClient()
