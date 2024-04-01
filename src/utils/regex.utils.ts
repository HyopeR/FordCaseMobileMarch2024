const ignoreErrors = [
  // Allow the use of nested lists. CAUTION: Act with control.
  'VirtualizedLists',
];
const ignoreErrorPattern = ignoreErrors.toString().replace(/,/g, '|');
export const ignoreErrorRegex = new RegExp(ignoreErrorPattern);

const ignoreWarnings = [] as any[];
const ignoreWarningPattern = ignoreWarnings.toString().replace(/,/g, '|');
export const ignoreWarningRegex = new RegExp(ignoreWarningPattern);
