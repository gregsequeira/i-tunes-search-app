# iTunes Search Application

A full-stack application for searching iTunes media content with favorites functionality.

## Features

- Search iTunes media content
- Filter by media type
- Add/remove favorites
- JWT authentication
- Responsive design

## Tech Stack

- Frontend: React, Bootstrap
- Backend: Node.js, Express
- Authentication: JWT

## Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/itunes-search-app.git
cd itunes-search-app
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create environment files:
```bash
# In backend folder
echo "PORT=8080\nSECRET_KEY=your_secret_key" > .env
```

4. Start the application:
```bash
# Start backend (from backend folder)
npm start

# Start frontend (from frontend folder)
npm start
```

## Environment Variables

Create the following environment files:

### Backend (.env)
```
PORT=8080
SECRET_KEY=your_secret_key
```

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit changes: `git commit -am 'Add YourFeature'`
4. Push to branch: `git push origin feature/YourFeature`
5. Submit a pull request

## License

MIT License
