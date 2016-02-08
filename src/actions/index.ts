export const SAMPLE_ACTION  = 'SAMPLE_ACTION';

export const SAMPLE_ASYNC   = 'SAMPLE_ASYNC';
export const SAMPLE_SUCCESS = 'SAMPLE_SUCCESS';
export const SAMPLE_FAILURE = 'SAMPLE_FAILURE';

interface GitHubAPIResponse {
  login: string,
};

type AsyncAction<T> = (dispatch: (a: Action) => void, getState: () => any) => Promise<T>;

export function changeAsyncSampleText(text): AsyncAction<GitHubAPIResponse> {
  return (dispatch, getState) => {

    dispatch(changeSampleText('LOADING...'));

    let p = fetch(`https://api.github.com/users?since=${Math.floor(Math.random() * 1000)}`);

    return p
      .then(
        (res): Promise<GitHubAPIResponse> => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Something went wrong.');
          }
        }
      )
      .then(
        users => {
          dispatch(changeSampleText(users[0].login));
          return users;
        } ,
        e => dispatch(changeSampleText(e.toString()))
      );
  };
}

export function changeSampleText(text) {
  return {type: SAMPLE_ACTION, text};
}
