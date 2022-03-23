import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const http = axios.create({
  headers: {
    "Content-type": "application/json",
  }
})

const mock = new MockAdapter(http);
mock.onGet("/api/person").reply(200, {
  name: '권일수',
  nickname: 'Leaf',
  birth: '1989-12-13',
  imageUrl: 'https://avatars.githubusercontent.com/u/20917534?v=4',
});

export default http
