import 'whatwg-fetch';

export const BASE_URL = '/api';

export function post(path: string, data: Object) {
  return fetch(BASE_URL + path, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => response.json());
}

export function head(path: string) {
  return fetch(`${BASE_URL}${path}`, {
    method: 'HEAD'
  });
}
