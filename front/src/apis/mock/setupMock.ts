import MockAdapter from 'axios-mock-adapter/types';
import personMock from './personMock';

export default function (mock: MockAdapter) {
  mock.onGet("/api/person").reply(200, personMock['get-api-person']);
  mock.onPut("/api/person").reply(200, personMock['put-api-person']);
}
