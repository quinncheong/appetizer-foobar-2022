// returns a string containing sentences of length 10 max
function cleanText(text) {
	let textCleaned = text
		.replace(/[^\w\s]|_/g, "")
		.replace(/\s+/g, " ")
		.toLowerCase();
	let textArray = textCleaned.split(" ");
	let result = "";
	let tmp = [];
	for (word of textArray) {
		if (tmp.length < 10) {
			tmp.push(word);
		} else {
			sentence = tmp.join(" ") + ". ";
			result += sentence.charAt(0).toUpperCase() + sentence.slice(1);
			tmp = [];
		}
	}
	if (tmp != []) {
		sentence = tmp.join(" ") + ". ";
		result += sentence.charAt(0).toUpperCase() + sentence.slice(1);
	}
	console.log("The cleaned text is: ", result);
	return result;
}

function createVideo(userInput) {
	let data = cleanText(userInput);
	// call api
}

module.exports = {
	cleanText,
};
