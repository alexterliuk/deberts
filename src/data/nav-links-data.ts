import { TranslationKey } from '../translations';

export interface NavLinkData {
  to: string;
  translationKey: TranslationKey;
  icon: string;
  exact?: boolean;
}

export type BarLink = { [x: string]: () => JSX.Element };

const navLinksData: NavLinkData[] = [
  { to: '/', translationKey: 'HOME', icon: 'home', exact: true },
  { to: '/game-rules', translationKey: 'GAME_RULES', icon: 'info' },
  { to: '/game', translationKey: 'NEW_GAME', icon: 'forward' },
];

export default navLinksData;
