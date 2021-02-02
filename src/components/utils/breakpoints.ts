const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

const bps = Object.keys(breakpoints);

export const getPrevBreakpoint = (
  bp: keyof typeof breakpoints,
  prevPrev?: 2
) => {
  // prettier-ignore
  const idx = bps.findIndex(k => bp === k);

  // look at -2 bp, then at -1 bp, if nothing there return just bp
  return bps[idx - (prevPrev || 1)] || bps[idx - 1] || bp;
};

export default breakpoints;
