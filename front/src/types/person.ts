export default interface Person {
  id: number;
  name: string;
  nickname?: string;
  birth?: string;
  email?: string;
  links?: Array<string>;
  imageUrl?: string;
}
