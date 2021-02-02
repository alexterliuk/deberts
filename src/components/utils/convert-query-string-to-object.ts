export default function convertQueryStringToObject(
  arg: string,
  convertToJSON?: boolean,
  spacesInJSON?: number
): QueryStringObj | undefined | string {
  if (typeof arg !== 'string') return undefined;

  const res = arg
    .slice(arg[0] === '?' ? 1 : 0)
    .split('&')
    .reduce((acc: QueryStringObj, curr) => {
      const [rawKey, rawVal] = curr.split('=');
      const paths = rawKey.split('.');
      const lastKey = paths[paths.length - 1];
      let currAcc = acc;
      let i = -1;

      while (++i < paths.length - 1) {
        if (!currAcc[paths[i]]) currAcc[paths[i]] = {};
        currAcc = currAcc[paths[i]] as QueryStringObj;
      }

      currAcc[lastKey] = decodeURIComponent(rawVal);
      return acc;
    }, {});

  return convertToJSON ? JSON.stringify(res, null, spacesInJSON || 0) : res;
}

export interface QueryStringObj {
  [x: string]: string | QueryStringObj;
}
