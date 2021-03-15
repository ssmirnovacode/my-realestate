import baseURL from '../assets/baseURL';

export default class RequestService {

    async getItems(url) {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async postItems(url, data) {
        const number = await this.getRequestNumber(url); 
        const newRequest = {
            id: number, 
            request: data
        }
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(newRequest)
        });
        if (!res.ok) {
            throw new Error(`Cound not fetch ${url}, status: ${res.status}`);
        }
        return await res.json();
    }

    async getRequestNumber(url){
        const res = await this.getItems(url);
        const reqNumber = res.length+1;

        return reqNumber;
    }
}