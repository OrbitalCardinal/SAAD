import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms"

// Material imports
import { MatButtonModule } from "@angular/material/button"
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import {MatTableModule} from '@angular/material/table';



// Component imports
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualizacionComponent } from './components/visualizacion/visualizacion.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



const routes:Routes =[
  {path: "home", component: HomeComponent},
  {path:"", component: LoginComponent, data: { animation: "login" }},
  {path:"signup", component: SignupComponent, data: { animation: "signup"}},
  {path:"visualizacion", component:VisualizacionComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    VisualizacionComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    [RouterModule.forRoot(routes)],
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
