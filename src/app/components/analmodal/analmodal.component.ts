import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-analmodal',
  templateUrl: './analmodal.component.html',
  styleUrls: ['./analmodal.component.css']
})
export class AnalmodalComponent implements OnInit {
  @Output() onClose = new EventEmitter<boolean>();

  closeModal() {
    this.onClose.emit(false);
  }

  constructor(private router: Router) { }
  nombre: String = "";

  ngOnInit(): void {
  }

  redirect(value: String) {
    this.router.navigate(["/visualization"], { state: {nombre: this.nombre} });
  }

}
