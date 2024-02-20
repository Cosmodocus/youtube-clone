YouTube Clone Project 🎬
Project Overview 🌟
This project aims to replicate the core features of YouTube, including video playback, category browsing, and API integration with the YouTube Data API.

Project Goals 🎯
Gain a deeper understanding of frontend technologies such as React, React Router, and CSS.
Implement practical usage of API integration with the YouTube Data API.
Apply React fundamentals including props, state, hooks, and ES6+ JavaScript methods.
File & Component Structure/Architecture 📂
Root:
src folder
Components folder
Recommended
Recommended.jsx
Recommended.css
PlayVideo
PlayVideo.jsx
PlayVideo.css
Feed
Feed.jsx
Feed.css
Sidebar
Sidebar.jsx
Sidebar.css
Navbar
Navbar.jsx
Navbar.css
assets folder
Pages folder
Home
Home.jsx
Home.css
Video
Video.jsx
Video.css
App.jsx file
data.js file
index.css file
main.jsx file
React Router Integration 🚀
Integrate project pages into App.jsx using React Router.
Wrap the App component with the <BrowserRouter> tag in main.jsx to enable React Router support.
Use Route tags to define routes for Home and Video components.
Mount the Sidebar component within the Home page.
Implement dynamic routing for video playback and category browsing.
Functionalities Implementation 🛠️
Sidebar Functionality:
Create a state for the sidebar with a default value of true in App.jsx.
Pass the sidebar state to the Home component using props.
Implement sidebar toggle functionality in the Navbar component.
Feed Functionality:
Create a Feed component with video thumbnails, titles, views, etc.
Implement dynamic class handling based on the sidebar state.
Video Page Functionality:
Create a PlayVideo component for video playback.
Integrate video details from the YouTube Data API.
Implement video autoplay and dynamic video content rendering.
YouTube Data API Integration:
Enable the YouTube Data API V3 for the project.
Create a data.js file to store the API key.
Fetch video category data and integrate it into the project's category browsing functionality.
Video Player Functionality:
Implement video playback using the YouTube embed player.
Fetch and display video details such as title, channel info, comments, likes, etc., using the YouTube Data API.
Contributing 🤝
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
