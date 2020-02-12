import axios from "axios";

export function sendingUser() {
    return {
      type: 'SENDING_USER'
    }
  }
  
  export function registerSuccess(user) {
    return {
      type: 'REGISTER_SUCCESS',
      user
    }
  }
  
  export function registerError(error) {
    return {
      type: 'REGISTER_ERROR',
      error
    }
  }
  
  export function createNewUser(user) {
    return dispatch => {
      dispatch(sendingUser());
      axios.post('./users', user)
      .then(res => {
          console.log(res);
          if (res.statusText === 'OK'){
              console.log('ok');
              dispatch(registerSuccess(res.data))
          }
      }).catch(e => {
          console.log(e);
          dispatch(registerError(e))
      });
    };
  }