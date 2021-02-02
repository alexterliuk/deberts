// these are temporarily hardcoded players
// later they will come from selections before the start of the game - users will add name for each player
export const players: Player[] = [
  {
    name: 'Taras',
    score: 0,
    lastWon: true,
    lastTake: 'will be Take',
    combinationsInGame: [],
    finesInGame: [],
  },
  {
    name: 'Igor',
    score: 0,
    lastWon: false,
    lastTake: '',
    combinationsInGame: [],
    finesInGame: [],
  },
  {
    name: 'Alex',
    score: 0,
    lastWon: false,
    lastTake: '',
    combinationsInGame: [],
    finesInGame: [],
  },
  {
    name: 'Sasha',
    score: 0,
    lastWon: false,
    lastTake: '',
    combinationsInGame: [],
    finesInGame: [],
  },
];

export interface Player {
  name: string;
  score: number;
  lastWon: boolean;
  lastTake: string;
  combinationsInGame: [];
  finesInGame: [];
}
