import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from "@angular/forms"
import { HttpClientModule } from "@angular/common/http";

// Material imports
import { MatButtonModule } from "@angular/material/button"
import { MatInputModule } from "@angular/material/input"
import { MatIconModule } from "@angular/material/icon"
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 



// Component imports
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualizationComponent } from './components/visualization/visualization.component';
import { FooterComponent } from './components/footer/footer.component';
import { GraphingComponent } from './components/graphing/graphing.component';
import { HeaderComponent } from './components/header/header.component';



const routes:Routes =[
  {path: "home", component: HomeComponent},
  {path:"", component: LoginComponent, data: { animation: "login" }},
  {path:"signup", component: SignupComponent, data: { animation: "signup"}},
  {path:"visualization", component: VisualizationComponent},
  {path:"graphing", component: GraphingComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    VisualizationComponent,
    HeaderComponent,
    FooterComponent,
    GraphingComponent
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
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule
  ],
  exports: [
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
