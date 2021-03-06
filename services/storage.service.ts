import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    getData(key: string): any {
        return JSON.parse(localStorage.getItem(key));
    }

    setData(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    constructor() { }

}