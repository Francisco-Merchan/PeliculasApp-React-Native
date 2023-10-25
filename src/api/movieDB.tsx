import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    language: 'es-ES',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMzVhODJjYzY2YWIwNjA2YWI1YmY0YmZiODRjZWJkOSIsInN1YiI6IjY1MmFlNGVmMWYzZTYwMDEzOTllNWQ0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7DFXbVc-4a0SxwplZ0u5rNlBN5VhAn7JTUg3n-1sHlY',
  },
});

export default movieDB;
