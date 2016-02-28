var React = require('react');
var SearchResultsStore = require('../stores/SearchStore');

var SearchResults =  React.createClass({
    getInitialState: function() {
        return {
            results: SearchResultsStore.getAllQueries()
        }
    },

    componentDidMount: function() {
        SearchResultsStore.addChangeListener(this.onStoreChange);
    },

    componentWillUnmount: function() {
        SearchResultsStore.removeChangeListener(this.onStoreChange);
    },

    onStoreChange: function() {
        this.setState({results: SearchResultsStore.getAllQueries()});
    },

    handleResults: function(result) {
        var contextData = SearchResultsStore.findQueryContents(result);
        contextData ? this.setState({contextData: contextData}) : this.setState({contextData: 'Nothing to display!'});
    },

    render: function() {
        const {results, contextData} = this.state;
        return (
            <div className="resultBox">
                <div className="contextResults">
                    <span>Search result: {contextData}</span>
                </div>
                <span>Search queries (last five): </span>
                <ul className="results">
                    {results.map(function (result, i) {
                        return <li key={i} onClick={this.handleResults.bind(this, result)}>{result}</li>
                    }.bind(this))}
                </ul>
            </div>
        )
    }
});

module.exports = SearchResults;