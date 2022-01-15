const express = require("express");
const router = express.Router();
const axios = require("axios");

const { vidGenEndpoint } = require("../../config.js");

const { cleanText } = require("../../script.js");

// In production it will not be undefined
if (!process.env.NODE_ENV) {
	require("dotenv").config();
}

const bearerToken = process.env.BEARER_TOKEN;

// Bearer token
const config = {
	headers: { Authorization: `Bearer ${bearerToken}` },
};

router.post("/createVideo", async (req, res) => {
	const { text } = req.body;
	let sanitizedText = cleanText(text);
    console.log(sanitizedText)
	try {
		let videoResponse = await axios({
			method: "post",
			url: vidGenEndpoint,
			data: {
				text: sanitizedText,
			},
			headers: { Authorization: `Bearer ${bearerToken}` },
		});

		console.log(videoResponse);

		return res.status(200).json({
			message: "Video created successfully",
		});
	} catch (error) {
		// console.log(error);
		console.log(error.request);
	}
});

router.get("/getPastVideos", (req, res) => {
	return res.status(200).json({
		mock: "mock",
	});
});

module.exports = router;
