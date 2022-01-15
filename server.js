var express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet"); // For security

// Initialise the express app
const app = express();
app.use(helmet());
app.use(cors());

// In production it will not be undefined
if (!process.env.NODE_ENV) {
	require("dotenv").config();
}

// Body-parser middleware usage for req.body
app.use(express.json({ limit: "50mb" }));

// Logging middleware
app.use(function (req, res, next) {
	// console.log(req)
	console.log(
		`Received the request from: ${req.protocol}://${req.headers.host}${req.originalUrl}`
	);
	next();
});

// app.use("/api/database", require("./routes/api/database"));
app.use("/api/video", require("./routes/api/video"));

// All code below only to be used in production
if (process.env.NODE_ENV === "production") {
	// set static folder
	app.use("/", express.static(path.join(__dirname, "client", "build")));

	app.get("/*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

app.get("/", (req, res) => {
	res.send("The Foobar Fighter's server is up and running!");
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
	console.log(
		`Server stared on port ${PORT}, NODE_ENV is ${process.env.NODE_ENV}`
	)
);
