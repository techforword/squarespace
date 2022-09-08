import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors({ origin: 'https://tfw.squarespace.com' }));

app.get('/api/v1/courses', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      apiKey: process.env.API_KEY,
    },
  };

  const response = await fetch(
    'https://developers.teachable.com/v1/courses',
    options
  );
  const courses = await response.json();

  return res.json(courses);
});

app.get('/api/v1/courses/1335944/enrollments', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      apiKey: process.env.API_KEY,
    },
  };

  const response = await fetch(
    'https://developers.teachable.com/v1/courses/1335944/enrollments',
    options
  );
  const enrollments = await response.json();

  return res.json(enrollments);
});

app.get('/api/v1/courses/1335944', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      apiKey: process.env.API_KEY,
    },
  };

  const response = await fetch(
    'https://developers.teachable.com/v1/courses/1335944',
    options
  );
  const webinars = await response.json();

  return res.json(webinars);
});

app.get('/api/v1/users', async (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      apiKey: process.env.API_KEY,
    },
  };

  const response = await fetch(
    'https://developers.teachable.com/v1/users',
    options
  );
  const users = await response.json();

  return res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});