var actions = require('./actions');

var initialState = {

};

var /*reducerName*/ = function(state, action){
  state = state || /*reducerName*/
  //can also be a switch case statement
  if (action.type === actions./*ACTION_NAME*/){
    //things happen
    //var thingState = Object.assign({}, state, {
      //thing: thing
    //})
    //return thingState;
  }
  return state;
}

exports./*reducerName*/ = /*reducerName*/;
