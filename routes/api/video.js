const express = require("express");
const router = express.Router();
const axios = require("axios");

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

router.post("/video", (req, res) => {
	return res.send(req.isAuthenticated());
});

router.post("/createVideo", async (req, res) => {
	const { text } = req.body;
	let sanitizedText = cleanText(text);
	let videoUrl = await axios.post("", {});

	return res.status(200).json({
		message: "Video created successfully",
	});
});

router.get("/getPastVideos", (req, res) => {
	return res.status(200).json({
		mock: "mock",
	});
});
