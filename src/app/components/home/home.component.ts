import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit{
    showModal: boolean = false;
    constructor (private http:HttpClient){}

    onClose(value: boolean) {
        this.showModal = value;
    }

    listaAnalisis: any;
    async ngOnInit() {
        const responseGet = await this.http.get("https://saad-f1dd7-default-rtdb.firebaseio.com/analisis/.json").toPromise();
        this.listaAnalisis = Object.values(responseGet);
    }
}