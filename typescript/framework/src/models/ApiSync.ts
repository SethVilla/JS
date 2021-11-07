import axios, {AxiosPromise} from 'axios';

interface HasId {
  id?: number;
};

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string){};
  fetch(id: number) : AxiosPromise {
    return axios.get<T[]>(`${this.rootUrl}/${id}`)
  }
  save(data: T ) : AxiosPromise {
    const { id }= data
    if(id) {
     return axios.put<T>(`${this.rootUrl}/${id}`, data)
    } else {
     return axios.post<T>(this.rootUrl, data)
    }
  }
}
