var React = require('react');
var ReactDOM = require('react-dom');

var Card = function(props) {
	return (
		<div className="card">
			<div className="card-text">{props.text}</div>
			<img className="card-image" src="http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg" />
		</div>
		);
};

module.exports = Card;