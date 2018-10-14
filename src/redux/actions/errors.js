export const triggerError = (error) => {
  console.log('New error triggered', error);
  return {
    type: 'TRIGGER_ERROR',
    message: error.message,
  };
};
