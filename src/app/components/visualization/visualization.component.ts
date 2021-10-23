import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },

];

@Component({
  selector: "visualizacion",
  templateUrl: "./visualization.component.html",
  styleUrls: ["./visualization.component.css"]
})

export class VisualizationComponent {
  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }
  displayedColumns: string[] = [];
  dataSource = ELEMENT_DATA;
  uploading: Boolean = false;
  data = [];

  onFileSelected(event: any) {
    this.uploading = true;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData: FormData = new FormData();
      formData.append("file",file);
      this.http.post("http://localhost:3000/data", formData).subscribe((response: any) => {
        this.uploading = false;
        this.data = response['data'].datajson
        this.displayedColumns = Object.keys(this.data[0]);
      },
        (error) => {
          console.log(error);
        });
    }

  }


  loadData() {
    this.http.request("GET", "http://localhost:3000/data").subscribe((response) => {
      console.log(response);
    },
      (error) => {
        console.log(error);
      });
  }
}