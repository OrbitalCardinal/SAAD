import { Component, OnInit } from "@angular/core";

@Component({
    selector: "header-component",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit {

    private days: String[]  = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Sábado', 'Domingo']; 
    private months: String[] = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    private date:Date = new Date(); //Create date

    private weekDay:any = this.date.getDay(); //Obtain the number of the day of the week (1-7)
    private monthDay:any = this.date.getDate(); //Obtain the number of the day of the month (1-31/30)
    private month:any = this.date.getMonth(); //Obtain the number of the month (0-11)
    private year:number = this.date.getFullYear(); //Obtain the year
    public todayDate:any;

    getDate() {
        this.weekDay = this.days[this.weekDay-1];
        this.month = this.months[this.month];
    }
    
    ngOnInit(): void {
        this.getDate();
        this.todayDate =  `${this.weekDay}, ${this.monthDay} de ${this.month} de ${this.year}`;
    }
}