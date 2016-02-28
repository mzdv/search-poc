var React = require ('react');
var SearchActions = require('../actions/SearchActions');

var SearchBar = React.createClass({
    getInitialState: function() {
        return {
            query: null
        }
    },

    render: function() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} />
                <input type="submit" value="Search" />
            </form>
        );
    },
    handleSubmit: function(e) {
        e.preventDefault();
        const {query} = this.state;
        SearchActions.addQuery(query);
    },
    handleChange: function(e) {
        e.preventDefault();
        this.setState({query: e.target.value});
    }
});

module.exports = SearchBar;