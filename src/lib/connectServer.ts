import { API_URL } from '../config';
import { IRequests } from '../types/interfaces';

const sendRequest = ({ path, method, contentType, body }: IRequests) => {
  const headers = new Headers();

  if (contentType !== null) headers.append('Content-Type', contentType);

  return new Promise((resolve, reject) => {
    fetch(API_URL + path, {
      method,
      headers,
      body,
    }).then((response) => {
      if (response.status === 401) {
        window.alert("Unauthenticated");
        reject(new Error());
      } else if (response.status === 403) {
        window.alert("Access Denied");
        reject(new Error());
      } else if (response.status === 500) {
        window.alert("Server Error");
        reject(new Error());
      } else if (response.status !== 200) {
        window.alert("Something went wrong");
        reject(new Error());
      } else {
        response.json().then((data) => {
          resolve(data);
        });
      }
    }).catch(() => {
      reject(new Error());
    });
  });
};

export default sendRequest;
