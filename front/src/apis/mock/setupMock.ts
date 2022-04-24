import MockAdapter from 'axios-mock-adapter/types';
import personApiMock from './personApiMock';
import skillApiMock from './skillApiMock';

export default function (mock: MockAdapter) {
  // person
  mock.onGet("/api/person").reply(200, personApiMock['get-api-person']);
  mock.onPut("/api/person").reply(200, personApiMock['put-api-person']);

  // skill
  mock.onGet("/api/skill/list").reply(200, skillApiMock['get-api-skill-list']);
  mock.onPost("/api/skill").reply(200, skillApiMock['post-api-skill']);
  mock.onPut("/api/skill").reply(200, skillApiMock['put-api-skill']);
  mock.onPost("/api/skill/search").reply(200, skillApiMock['post-api-skill-search']);
}
