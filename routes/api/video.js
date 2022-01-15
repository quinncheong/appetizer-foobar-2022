const express = require("express");
const router = express.Router();
const axios = require("axios");

import { cleanText } from '../../script.js'

router.post("/video", (req, res) => {
	return res.send(req.isAuthenticated());
});

router.post("/createVideo", async (req, res) => {
    const { text } = req.body;
    let sanitizedText = cleanText(text);
    let videoUrl = await axios.post("", {})

	return res.status(200).json({
		message: "Video created successfully",
	});
});

router.get("/getPastVideos", (req, res) => {
	return res.status(200).json({
		mock: "mock",
	});
});
