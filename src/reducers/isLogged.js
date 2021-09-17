const isLoggedReducer = (state = false, action) => {
  if (action.type === 'LOG_IN') {
    localStorage.setItem('loggedIn', action.payload)
    state = true
  }
  return state;
}

export default isLoggedReducer