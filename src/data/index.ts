import breakpoints, { getPrevBreakpoint } from './breakpoints';
import colors from './colors';
import allSpacings from './spacing';
import navLinksData, { NavLinkData, BarLink } from './nav-links-data';

const { grey, blueGrey, brown, lightBlue, red, orange } = colors;
export { grey, blueGrey, brown, lightBlue, red, orange, colors };

const { xs, sm, md, lg, xl } = breakpoints;
export { xs, sm, md, lg, xl, breakpoints, getPrevBreakpoint };

const { spacing, spacingRect } = allSpacings;
export { spacing, spacingRect };

export { navLinksData };
export type { NavLinkData };
export type { BarLink };
