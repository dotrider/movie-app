import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//Components imports
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { MoviesComponent } from './components/movies/movies.component';
import { DashboardComponent } from './components/Dashboard/dashboard.component';

//Material imports
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';

//Form Module
import { FormsModule } from '@angular/forms';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HeaderComponent,
    SearchComponent,
    MoviesComponent,
    DashboardComponent,
    MovieInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
