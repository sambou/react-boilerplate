export const SAMPLE_ACTION  = 'SAMPLE_ACTION';

export const SAMPLE_ASYNC   = 'SAMPLE_ASYNC';
export const SAMPLE_SUCCESS = 'SAMPLE_SUCCESS';
export const SAMPLE_FAILURE = 'SAMPLE_FAILURE';

interface GitHubAPIResponse {
  login: string,
};

type AsyncAction<T> = (dispatch: (a: Action) => void, getState: () => any) => Promise<T>;

export function changeAsyncSampleText(text): AsyncAction<string> {
  return async function(dispatch, getState) {
    dispatch(changeSampleText('LOADING...'));
    let response = await getUsers();

    try {
      let users = await parseUsers(response);
      dispatch(changeSampleText(users[0].login));

      return users;
    } catch(e) {
      dispatch(changeSampleText(e.toString()))
    }
  };
}

async function getUsers() {
  return fetch(`https://api.github.com/users?since=${Math.floor(Math.random() * 1000)}`);
}

async function parseUsers(response) {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Something went wrong.');
  }
}

export function changeSampleText(text) {
  return {type: SAMPLE_ACTION, text};
}
