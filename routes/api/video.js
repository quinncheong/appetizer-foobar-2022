const express = require("express");
const router = express.Router();
const axios = require("axios");

const { vidGenEndpoint, summaryEndpoint } = require("../../config.js");

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
	try {
		let videoResponse = await axios({
			method: "post",
			url: vidGenEndpoint,
			data: {
				text: sanitizedText,
			},
			headers: { Authorization: `Bearer ${bearerToken}` },
		});

        console.log(videoResponse)

        // According to WayneHills API
		if (videoResponse.status === 201) {
			return res.status(200).json(videoResponse.data.result.location);
		}

		return res.status(400).json("Error creating video");
	} catch (error) {
		console.log("Hitting the Error");
		console.log(error);
        return res.status(400).json("There was an Error with the request");
	}
});

router.post("/getSummary", async (req, res) => {
    const { text } = req.body;
    let sanitizedText = cleanText(text);
    try {
        let summaryResponse = await axios({
            method: "post",
            url: summaryEndpoint,
            data: {
                text: sanitizedText,
            },
            headers: { Authorization: `Bearer ${bearerToken}` },
        });

        console.log(summaryResponse)

        // According to WayneHills API
        if (summaryResponse.status === 201) {
            // summarization is an array of objects
            let { summarization } = summaryResponse.data.result; 
            let keywords = [];
            let sentences = [];
            for (let summary of summarization) {
                sentences.push(summary.sentence);
                for (let keyword of summary.keywords) {
                    if (!keywords.includes(keyword)) {
                        keywords.push(keyword);
                    }
                }
            }

            return res.status(200).json({
                keywords,
                sentences,
            });
        }

        return res.status(400).json("Error creating video");
    } catch (error) {
        console.log("Hitting the Error");
        console.log(error);
        return res.status(400).json("There was an Error with the request");
    }
})

router.get("/getPastVideos", (req, res) => {
	return res.status(200).json({
		mock: "mock",
	});
});

module.exports = router;
