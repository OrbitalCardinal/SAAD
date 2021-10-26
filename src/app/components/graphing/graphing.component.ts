import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Chart, registerables} from 'chart.js'

@Component({
    selector: "graphing-component",
    templateUrl: "./graphing.component.html",
    styleUrls: ["./graphing.component.css"]
})


export class GraphingComponent implements AfterViewInit {
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
}