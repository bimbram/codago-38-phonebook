export default function({ dispatch }) {
  return function(next) {
    return function(action) {
      if(!action.payload || !action.payload.then) {
        return next(action);
      }
      // console.log("ini action.payload di middlewares async: ", action.payload);
      action.payload
        .then(function(response) {
          const newAction = {...action, payload: response.data };
          dispatch(newAction);
        })
    }
  }
}
