Flavour Fusion: AI-Driven Recipe Blogging

Project Overview:
Flavour Fusion is a web application that generates AI-driven recipes based on user input. The project utilizes OpenAI's API to create unique recipes and incorporates a programming joke API for added engagement.

Technologies Used:

React.js for the frontend

Express.js for the backend

OpenAI API for recipe generation

Axios for HTTP requests

Bootstrap and Tailwind CSS for UI styling

Official Joke API for fetching programming-related jokes

Project Structure:
flavour-fusion/
│── backend/
│   ├── server.js
│   ├── .env
│   ├── package.json
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── FlavourFusion.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── public/
│   ├── package.json
│── README.md

Setup Instructions:

1. Clone the repository:
git clone https://github.com/your-username/flavour-fusion.git

2. Navigate to the backend and install dependencies:
cd flavour-fusion/backend
npm install

3. Create a .env file in the backend directory and add:

OPENAI_API_KEY=your_openai_api_key_here

4. Start the backend server:

node server.js

5. Navigate to the frontend and install dependencies:

cd ../frontend
npm install

6. Start the frontend:

npm start

Backend (server.js) Functionality:

-> Accepts a POST request to /generate-recipe with topic and wordCount.

-> Calls OpenAI's API to generate a recipe.

-> Returns the generated recipe to the frontend.

-> Frontend (FlavourFusion.js) Functionality:

-> Takes user input (recipe topic and word count).

-> Sends a request to the backend for recipe generation.

-> Displays the generated recipe and a programming joke.

Possible Enhancements:

-> Improve UI with more styling.

-> Add user authentication.

-> Implement recipe saving and sharing functionality.

->Integrate image generation for recipe visualization.

Contributors:

Pasavala Sravanthi

License:
This project is open-source under the MIT License.

