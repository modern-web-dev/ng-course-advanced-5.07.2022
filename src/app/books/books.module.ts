import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './components/book-list/book-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {BookService} from "./services/book.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    BookListComponent
  ],
  exports: [
    BookListComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, SharedModule, HttpClientModule
  ],
  providers: [BookService]
})
export class BooksModule { }
