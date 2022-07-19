import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from 'models/IUser'
import { AppDispatch } from '..'

// usage of second way, already create constants in extra reeducer field
export const fetchUser = createAsyncThunk('auth/fetchUser', async (_, thunkApi) => {
  try {
    //    const response = await fetch('/ //',)  // get some data
    // return response.data
  } catch (error) {
    thunkApi.rejectWithValue(error)
  }
})

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
    userIsFetching(state) {
      state.loading = true
    },
    userIsFetchingSuccess(state) {
      state.loading = false
    },
    userIsFetchingError(state) {
      state.loading = false
    },
  },
  extraReducers: {
    [fetchUser.pending.type]: (state) => {
      state.loading = true
    },
    [fetchUser.fulfilled.type]: (state) => {
      state.loading = false
    },
    [fetchUser.rejected.type]: (state) => {
      state.loading = false
    },
  },
})

export default authSlice.reducer

export const authActions = authSlice.actions

// basic thunk usage

// export const fetchUser = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(authActions.userIsFetching())

//     // const response = await fetch('///',)  // get some data

//     dispatch(authActions.userIsFetchingSuccess())
//   } catch (error) {
//     dispatch(authActions.userIsFetchingError())
//   }
// }
