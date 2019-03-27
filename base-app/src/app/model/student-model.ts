import { DocId } from './doc-id';

export interface StudentModel extends DocId{
  name: string;
  age: number;
  city: string;
  gender: string;
  photo: string;
}
