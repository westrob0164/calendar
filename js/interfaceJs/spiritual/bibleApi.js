//import { API_KEY } from './my-key.js';
// this makes the API call to the API.Bible site

export {
   apiCall
};

// runs a ajax api call to get data from the API.Bible site
function apiCall(inputURL) {

   const API_KEY = `e00d6c5f37f09076a501ad7e8d7e54c3`;

   const ajaxCall = $.ajax({ 
      url: `https://api.scripture.api.bible/v1/bibles${inputURL}`, 
      contentType: "application/json",
      headers: { "Api-Key": API_KEY    },
      dataType: 'json',
      success: function(result){
         }
      })
   return ajaxCall;
}