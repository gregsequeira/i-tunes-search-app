# iTunes Media Search Application

## Description

iTunes Media Search Application allows users to search for various media types such as movies, podcasts, music, audiobooks, TV shows, software, and eBooks. The application communicates with the iTunes Search API to fetch media data to display.

## Purpose

The purpose of this application is to provide users with a convenient tool to search for iTunes media and manage favourites with a favourites list

## Key Features

- **Search Functionality**: Users can enter an artist or album and also select the type of media to search for. If input is empty, the user is prompted and if the search returns no results there will also be a notification.
- **Favourites List**: Users can add and remove items from a favorites list. Items added will show on the "Add to Favourites" button. Favourite items are listed at the bottom. You can also remove an item from this list.
- **Design**: Attractive and user-friendly interface.
- **Modal Alerts**: Modal alerts for user feedback, such as empty search terms or no results found.

## Installation

### Steps

1. **Install Dependencies for the Backend**:

   ```bash
   cd backend
   npm install
   ```

2. **Install Dependencies for the Frontend**:

   ```bash
   cd ../frontend
   npm install
   ```

3. **Start the Backend Server**:

   ```bash
   cd backend
   npm start
   ```

4. **Start the Frontend Server**:

   ```bash
   cd ../frontend
   npm start
   ```

   The frontend will be available at `http://localhost:3000` and the backend server at `http://localhost:8080`.
