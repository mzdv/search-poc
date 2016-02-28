var AppDispatcher = require('../dispatcher/AppDispatcher');
var SearchConstants = require('../constants/SearchConstants');

var SearchActions = {
    addQuery: function (query) {
        AppDispatcher.dispatch({
            actionType: SearchConstants.SEARCH_ADD_QUERY,
            query: query
        });
    }
};

module.exports = SearchActions;
