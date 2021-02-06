export interface NavLinkData {
  to: string;
  text: string;
  icon: string;
  exact?: boolean;
}

export type BarLink = { [x: string]: () => JSX.Element };

export const linksData: NavLinkData[] = [
  { to: '/', text: 'Home', icon: 'home', exact: true },
  { to: '/about', text: 'About', icon: 'info' },
  { to: '/game', text: 'New Game', icon: 'forward' },
];
