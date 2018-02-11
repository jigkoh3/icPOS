import { HttpHeaders } from "@angular/common/http";

export class Constants {
    public static get API_URL(): string { 
        //dev
        return 'http://localhost:3000'; 
        //test
        //return 'https://ic-pos-service-test.herokuapp.com';
        //production
        //return 'https://ic-pos-service-prod.herokuapp.com';
    };
    public static get Header() {
        let header = new HttpHeaders()
        header = header.append('Content-Type', 'application/json');
        header = header.append('Accept', 'application/json');
        header = header.append('Authorization', 'Bearer ' + window.localStorage.getItem('token'));
        return header;
    }
}