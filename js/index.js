require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

var Board = require('./components/board');
var listArray = ["First Kitty List", "Second Kitty List", "Third Kitty List"];

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(<Board title="Kute Kitties" lists={listArray} />, document.getElementById('app'));
});

