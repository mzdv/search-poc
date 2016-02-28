var React = require('react');

var SearchBar = require('./SearchBar.jsx');
var SearchResults = require('./SearchResults.jsx');

var SearchWindow = React.createClass({

    render: function() {
        return (
            <div>
                <SearchBar />
                <SearchResults />
            </div>
        );
    }

});

module.exports = SearchWindow;
