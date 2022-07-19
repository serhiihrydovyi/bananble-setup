import { useAppDispatch, useAppSelector } from 'hooks/store'
import { useEffect } from 'react'
import AuthorizationApi from 'services/AuthorizationApi'
import { authActions } from 'store/reducers/AuthSlice'

const Home = () => {
  const dispatch = useAppDispatch()
  //   const user = useAppSelector((state) => state.authReducer.user)
  const counter = useAppSelector((state) => state.authReducer.counter)
  const onIncrement = () => dispatch(authActions.increment(1))

  useEffect(() => {
    dispatch(AuthorizationApi.login())
  }, [])

  return <div onClick={onIncrement}>Home {counter}</div>
}

export default Home
