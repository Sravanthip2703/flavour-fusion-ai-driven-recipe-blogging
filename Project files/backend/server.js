const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

app.post("/generate-recipe", async (req, res) => {
    console.log("Received Request Body:", req.body);  // Debugging line
    const { topic, wordCount } = req.body;

    if (!topic || !wordCount) {
        return res.status(400).json({ error: "Topic and word count are required" });
    }

    try {
        const generatedRecipe = `Here is a ${wordCount}-word recipe about ${topic}. (AI-generated content will be placed here.)`;
        res.json({ recipe: generatedRecipe });
    } catch (error) {
        console.error("Error generating recipe:", error);
        res.status(500).json({ error: "Error generating recipe" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));