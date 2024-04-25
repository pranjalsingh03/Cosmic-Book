import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { WriteComponent } from './pages/write/write.component';
import { HeaderComponent } from './pages/header/header.component';
import { ReadComponent } from './pages/read/read.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './pages/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { BrowseComponent } from './pages/browse/browse.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'write', component: WriteComponent },
  { path: 'signup', component: SignupComponent},
  { path: 'read/:id', component: ReadComponent },
  { path: 'browse', component: BrowseComponent},
  { path: "read/fantasy/:id", component: ReadComponent },
  { path: "read/romance/:id", component: ReadComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    WriteComponent,
    HeaderComponent,
    ReadComponent,
    FooterComponent,
    SignupComponent,
    BrowseComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
