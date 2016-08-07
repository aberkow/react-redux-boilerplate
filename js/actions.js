//use axios for async http requests
//const axios = require('axios');

const EXAMPLE_ACTION = 'EXAMPLE_ACTION';
const exampleAction = function(arg){
  return {
    type: EXAMPLE_ACTION,
    arg: arg
  };
};

exports.EXAMPLE_ACTION = EXAMPLE_ACTION;
exports.exampleAction = exampleAction;

//async request example actions/functions using axios

const FETCH_EXAMPLE_SUCCESS = 'FETCH_EXAMPLE_SUCCESS';
const fetchExampleSuccess = function(arg){
  return{
    type: FETCH_EXAMPLE_SUCCESS,
    arg: arg
  };
};

const FETCH_EXAMPLE_ERROR = 'FETCH_EXAMPLE_ERROR';
const fetchExampleError = function(arg, error){
  return{
    type: FETCH_EXAMPLE_ERROR,
    error: error,
    arg: arg
  };
};

var fetchExample = function(arg){
  //optional variables here...
  return function(dispatch){
    return axios({
      method: 'GET',
      url: /*url info for request*/,
      //responseType: json (optional)
      //headers: {optional}
    })
    .then(function(response){
      if (response.state < 200 || response.status >= 300){
        console.log(response, 'response';
      var error = new Error(response.statusText)
      error.response = response
      throw error;
      }
      return response;
    })
    .then(function(arg){
      console.log(arg, 'from fetchExample action');
      //optional create variables to pass as arguments
      return dispatch(fetchExampleSuccess(arg));
    })
    .catch(function(error){
      console.log(error, arg, 'from fetchExampleError');
      return dispatch(fetchExampleError(arg, error));
    });
  }
}

exports.FETCH_EXAMPLE_SUCCESS = FETCH_EXAMPLE_SUCCESS;
exports.fetchExampleSuccess = fetchExampleSuccess;

exports.FETCH_EXAMPLE_ERROR = FETCH_EXAMPLE_ERROR;
exports.fetchExampleError = fetchExampleError;

exports.fetchExample = fetchExample;
