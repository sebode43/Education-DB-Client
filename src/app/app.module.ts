import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; //two-way binding
import { HttpClientModule } from '@angular/common/http'; //async
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MajorListComponent } from './major/major-list/major-list.component';
import { MajorDetailComponent } from './major/major-detail/major-detail.component';
import { MajorCreateComponent } from './major/major-create/major-create.component';
import { MajorEditComponent } from './major/major-edit/major-edit.component';
import { MenuComponent } from './menu/menu/menu.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { SortPipe } from './pipes/sort.pipe';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
import { MajorcodecheckComponent } from './major/majorcodecheck/majorcodecheck.component';
import { MajorSearchPipe } from './major/major-search.pipe';
import { StudentSearchPipe } from './student/student-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MajorListComponent,
    MajorDetailComponent,
    MajorCreateComponent,
    MajorEditComponent,
    MenuComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentDetailComponent,
    StudentEditComponent,
    SortPipe,
    MenuitemComponent,
    MajorcodecheckComponent,
    MajorSearchPipe,
    StudentSearchPipe
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
