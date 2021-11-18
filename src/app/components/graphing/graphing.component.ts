import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, registerables} from 'chart.js'
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    selector: "graphing-component",
    templateUrl: "./graphing.component.html",
    styleUrls: ["./graphing.component.css"]
    
})


export class GraphingComponent implements AfterViewInit, OnInit {

    constructor(private http: HttpClient, private router:Router) {}
    
    @ViewChild('plot') plot: ElementRef<HTMLCanvasElement>;

    ngAfterViewInit() {
        const labels = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
        ];
        const data = {
            labels: labels,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        };

        console.log(this.plot);
        Chart.register(...registerables);
        const myChart = new Chart(
            this.plot.nativeElement,
            {
                type: 'line',
                data: data,
                options: {}
            }
        );
    }

    nombre: String;
    ngOnInit(): void {
        this.nombre = history.state.nombre;
    }


    async onSubmit() {
        const objeto = {
            fecha: new Date(),
            nombre: this.nombre,
            archivo: "equiz",
        }
        const response = await this.http.post("https://saad-f1dd7-default-rtdb.firebaseio.com/analisis/.json", objeto).toPromise();    
        this.router.navigate(["/home"]);
        //const responseGet = await this.http.get("https://saad-f1dd7-default-rtdb.firebaseio.com/.json").toPromise();
      
    }
}