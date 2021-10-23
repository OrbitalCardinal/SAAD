import { Component } from "@angular/core";
import * as dataForgeFs from "data-forge-fs";
import * as dataForge from "data-forge";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    
  ];

@Component({
    selector:"visualizacion",
    templateUrl:"./visualizacion.component.html",
    styleUrls:["./visualizacion.component.css"]
})

export class VisualizacionComponent{
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;
    loadData() {
        // const df = dataForge.readFileSync("assets/datasets/iris.csv").parseCSV();
        const df = dataForgeFs;
        const df2 = new dataForge.DataFrame([[1,2,3],[1,2,3]]);
        console.log(df2.toString());
    }
}