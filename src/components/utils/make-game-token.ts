import { v4 as uuidv4 } from 'uuid';

export default function makeGameToken(length?: number) {
  const token = uuidv4();
  return length ? token.slice(0, length) : token;
}
