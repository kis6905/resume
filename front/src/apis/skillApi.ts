import http from './http';
import Skill from '@/types/skill';

export default {
  getList (): Promise<Array<Skill>> {
    return http.get('/api/skill/list');
  },
  add (data: Array<Skill>): Promise<Array<Skill>> {
    return http.post('/api/skill', data);
  },
  modify (data: Array<Skill>): Promise<Array<Skill>> {
    return http.put('/api/skill', data);
  },
  search (query: string): Promise<Skill> {
    return http.put('/api/skill/search', { query });
  }
}
