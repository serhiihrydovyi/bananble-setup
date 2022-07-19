import { IUser } from 'models/IUser'

interface UsersState {
  users: IUser[]
  loading: boolean
}

export const initialState: UsersState = {
  users: [],
  loading: false,
}
