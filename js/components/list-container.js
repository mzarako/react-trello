var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./list');

var ListContainer = React.createClass({
	getInitialState: function() {
		return {
			input: '',
			cards: []
		}
	},
	onAddInputChanged: function(event) {
		this.setState({ input: event.target.value });
	},
	onAddSubmit: function(event) {
		event.preventDefault();
		let updatedCards = this.state.cards;
		updatedCards.push(this.state.input);
		this.setState({ cards: updatedCards });
	},
	render: function() {
		return (
			<div className="lists">
				<List onAddSubmit={this.onAddSubmit} onAddInputChanged={this.onAddInputChanged} title={this.props.title} cards={this.state.cards} />
			</div>
		);
	}
});

module.exports = ListContainer;