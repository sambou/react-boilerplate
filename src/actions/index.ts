export const SAMPLE_ACTION  = 'SAMPLE_ACTION';

export const SAMPLE_ASYNC   = 'SAMPLE_ASYNC';
export const SAMPLE_SUCCESS = 'SAMPLE_SUCCESS';
export const SAMPLE_FAILURE = 'SAMPLE_FAILURE';

interface GitHubAPIResponse {
  name: string,
  location: string,
};

type AsyncAction<T> = (dispatch: (a: Action) => void, getState: () => any) => Promise<T>;

export function changeAsyncSampleText(text): AsyncAction<GitHubAPIResponse> {
  return (dispatch, getState) => {

    dispatch(changeSampleText('LOADING...'));

    let p = fetch('https://api.github.com/users/octocat');

    return p
      .then(
        (res): Promise<GitHubAPIResponse> => res.json(),
        e => dispatch(changeSampleText(e))
      )
      .then(
        json => {
          dispatch(changeSampleText(`searched for ${json.name} from ${json.location}`));
          return json;
        }
      );
  };
}

export function changeSampleText(text) {
  return {type: SAMPLE_ACTION, text};
}
