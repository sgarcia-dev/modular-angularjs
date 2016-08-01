function dateFormat() {
	return function(input) {
		return new Date(input).toLocaleString();
	}
}

module.exports = dateFormat;