import http from './http';
import Person from '@/types/person';

export default {
  get (): Promise<Person> {
    return http.get('/api/person');
  },
  update (data: Person): Promise<Person> {
    return http.put('/api/person', data);
  }
}
