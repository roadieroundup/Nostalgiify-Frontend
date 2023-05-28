![banner](readme_files/rmbanner.png?raw=true "banner")

## Overview

Nostalgiify is a full-stack web application that allows users to create personalized Spotify playlists based on historical music charts. The application seamlessly integrates a frontend user interface with a backend API to deliver a smooth and engaging user experience.

Here's an overview of how Nostalgiify works:

1. User Authentication: Users securely log in using the frontend interface, authenticating with their Spotify credentials.

2. Date Selection: Once logged in, users can select a specific date using the frontend calendar feature. This date serves as the basis for retrieving the top 100 songs from the Billboard Hot 100 tracks of that particular day.

3. Web Scraping: When a date is chosen, the frontend sends a request to the backend API, including the selected date and user credentials. The backend utilizes Playwright, a powerful web scraping tool, to extract the top 100 songs from the Billboard website corresponding to the chosen date.

4. Playlist Generation: With the list of songs obtained from the web scraping process, the backend API proceeds to create a Spotify playlist using the Spotify API integration. It adds all the fetched songs to the playlist, generating a unique link for easy access.

5. Frontend Display: The frontend interface of Nostalgiify displays the recently generated playlist, allowing users to conveniently access and listen to their personalized playlist.

You can see the [Express JS Backend project here.](https://github.com/roadieroundup/Nostalgiify-Backend)\
\
![demo](readme_files/demo.gif?raw=true "Demo")

## Motivation

Nostalgiify was born out of my passion for exploring the possibilities offered by the Spotify API and my fascination with the world of web scraping. By creating this project, I aimed to combine these interests and provide users with a unique experience of discovering new music. Nostalgiify allows users to travel back in time, reliving the top songs of specific dates and generating personalized playlists. This project represents my dedication to leveraging technology to create innovative and engaging applications in the realm of music and data extraction.

## Tech Stack

The project utilizes the following relevant technologies and dependencies:
- React 18.2.0: Frontend framework for building user interfaces.
- Vite 4: Build tool for frontend development.
- Ant Design 5.5.1: Component library for React.
- React Router DOM 6.11.2: Routing library for React.
- Redux Toolkit 1.9.5: State management library for React.
- Axios 1.4: A JavaScript library for making HTTP requests.

Also I used the following tools:

- ColorWave AI: Generate color palettes based on keywords.
- CSS Gradient Animator: Create animated gradients for the background.


## Live site

Check out the live version of the application at https://roadieroundup.github.io/Nostalgiify-Frontend/

## Possible future updates

- [ ] Improve the use of the AntD notification component.
- [ ] Spotify embed playlist sometimes does not load properly.

Feel free to explore the project and provide any feedback or suggestions for further improvements.