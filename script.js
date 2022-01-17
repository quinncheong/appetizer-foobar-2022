// returns a string containing sentences of length 10 max
function cleanText(texts) {
	let textArray = texts.split(". ");
	let result = [];
	for (text of textArray) {
		let sentenceArr = text.split(" ");
		if (sentenceArr.length <= 10) {
			result.push(text + ".");
		} else {
			while (sentenceArr.length > 10) {
				tmp = sentenceArr.slice(0, 10).join(" ") + ".";
				tmp = tmp.charAt(0).toUpperCase() + tmp.slice(1);
				result.push(tmp);
				sentenceArr = sentenceArr.slice(10);
			}
			if (sentenceArr.length > 0) {
				tmp = sentenceArr.slice(0, 10).join(" ") + ".";
				tmp = tmp.charAt(0).toUpperCase() + tmp.slice(1);
				result.push(tmp);
			}
		}
	}
	console.log(result.join(" "));
	return result.join(" ");
}

function createVideo(userInput) {
	let data = cleanText(userInput);
	// call api
}

module.exports = {
	cleanText,
};
