export const USER_INFORMATION = 'USER_INFORMATION';
export const USER_SCORE = 'USER_SCORE';
export const USER_ASSERTIONS = 'USER_ASSERTIONS';

export const userData = (name) => ({ type: USER_INFORMATION, name });

export const TIME = 'TIME';

export const secondTime = (timer) => ({ type: TIME, timer });

export const scoreData = (score) => ({ type: USER_SCORE, score });

export const assertionsData = (assertions) => ({ type: USER_ASSERTIONS, assertions });
