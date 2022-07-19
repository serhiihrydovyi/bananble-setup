import { createAsyncThunk } from '@reduxjs/toolkit'
import { httpClient } from 'utils/HttpClient'

class AuthorizationApi {
  static login = createAsyncThunk('auth/fetchUser', async (_, thunkApi) => {
    try {
      const response = await httpClient.request({
        url: '/posts',
        method: 'GET',
      })

      return response.data
    } catch (error) {
      return thunkApi.rejectWithValue(error)
    }
  })
}

export default AuthorizationApi
