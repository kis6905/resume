import http from '../http';
import Person from '@/types/person';

export default {
  get (): Promise<Person> {
    return http.get('/person')
  },
  update (data: Person): Promise<Person> {
    return http.put('/person', data)
  }
}
