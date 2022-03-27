import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import setupMock from './mock/setupMock';

const http = axios.create({
  headers: {
    "Content-type": "application/json",
  }
});

console.log('MOCK_MODE', process.env.MOCK_MODE);

setupMock(new MockAdapter(http));

export default http;
