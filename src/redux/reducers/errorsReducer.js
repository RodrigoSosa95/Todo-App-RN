const initialState = {
  showError: false,
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TRIGGER_ERROR':
      return {
        showError: true,
        message: action.message,
      };
    case 'HIDE_ERROR':
      return {
        showError: false,
        message: '',
      };
    default:
      return state;
  }
};
