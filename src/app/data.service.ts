import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpCLient: HttpClient) { }

  GetPosts() {
    // return(this.httpCLient.get('https://jsonplaceholder.typicode.com/posts'));

    return fetch(('https://jsonplaceholder.typicode.com/posts'));
  }

  Get_A_Post(id: number) {
    // return await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    // .then(response => response.json())
    // .then(json => console.log(json));

    return fetch('https://jsonplaceholder.typicode.com/posts/' + id);

    // const data = await fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    //             .then(response => response.json())
    //             .then(json => console.log(json));
  }

  Delete_A_Post(id: number) {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
      method: 'DELETE'
    });
  }

  Create_A_Post(titleInput: string, bodyInput: string, userIdInput: number) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput,
        userId: userIdInput
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    // .then(response => response.json())
    // .then(json => console.log(json));
  }
  Update_A_Post(titleInput: string, bodyInput: string, idInput: number) {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + idInput, {
      method: 'PATCH',
      body: JSON.stringify({
        title: titleInput,
        body: bodyInput
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    // .then(response => response.json())
    // .then(json => console.log(json));
  }


}
