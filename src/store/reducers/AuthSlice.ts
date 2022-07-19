import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'models/IUser'
import AuthorizationApi from 'services/AuthorizationApi'

interface AuthState {
  accessToken: string
  refreshToken: string
  user: IUser | null
  counter: number
  loading: boolean
}

export const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
  user: null,
  counter: 0,
  loading: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.counter = action.payload
    },
  },
  extraReducers: {
    [AuthorizationApi.login.pending.type]: (state) => {
      state.loading = true
    },
    [AuthorizationApi.login.fulfilled.type]: (state) => {
      state.loading = false
    },
    [AuthorizationApi.login.rejected.type]: (state) => {
      state.loading = false
    },
  },
})

export default authSlice.reducer

export const authActions = authSlice.actions
