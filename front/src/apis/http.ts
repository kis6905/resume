import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import setupMock from './mock/setupMock';

const http = axios.create({
  headers: {
    'Content-type': 'application/json',
  }
});

if (import.meta.env.VITE_MOCK_MODE === 'true') {
  console.log('%c※ This is mock mode! ※', 'color:red; font-weight:bold; font-size:large');
  setupMock(new MockAdapter(http));
}

export default http;
