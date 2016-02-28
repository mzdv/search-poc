var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SearchConstants = require('../constants/SearchConstants');

var CHANGE_EVENT = 'CHANGE_EVENT';

var queries = [];
var firstToRemove = -1;

function addQuery(query) {
  if (queries.length < 5) {
    return queries.push(query);
  } else {
    if (firstToRemove === 4) {
      firstToRemove = -1;
    }
    firstToRemove++;
    return queries.splice(firstToRemove, 1, query);
  }
}

var SearchResultsStore = Object.assign({}, EventEmitter.prototype, {

  getAllQueries: function() {
    return queries;
  },

  findQueryContents: function(query) {
    var element = localStorage.getItem(query.toUpperCase());
    if (element) {
      return element;
    } else {
      return null;
    }
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});


AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case SearchConstants.SEARCH_ADD_QUERY:
          addQuery(action.query);
          SearchResultsStore.emitChange();
          break;
    default:
  }
});

module.exports = SearchResultsStore;
