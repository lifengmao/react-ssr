import { CHANGE_LOGIN } from './constants';
const changeLogin = (login) => ({
  type: CHANGE_LOGIN,
  login
})


export const getHeaderInfo = () => {
    return (dispatch, getState, axiosInstance) => {
      return axiosInstance.get('/api/isLogin.json')
        .then(res => {
          console.log(res.data.data.login)
          const login = res.data.data.login;
          dispatch(changeLogin(login))
        })
    }
}

export const login = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/login.json')
      .then(res => {
        // const login = res.data.data.login;
        dispatch(changeLogin(true))
      })
  }
}

export const logout = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/logout.json')
      .then(res => {
        // const login = res.data.data.login;
        dispatch(changeLogin(false))
      })
  }
}

