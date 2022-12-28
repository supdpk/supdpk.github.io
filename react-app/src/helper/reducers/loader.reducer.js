const loaderReducer = function (state = true, action) {
  switch (action.type) {
    case "SHOW":
      console.log("Reducer is being called on show",action,state);
      return true;
    case "HIDE":
      console.log("Reducer is being called on hide");
      return false;
    default:
      console.log("Reducer is being called on default");
      return state;
  }
};

export default loaderReducer;