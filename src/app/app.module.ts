import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileUploaderService } from './services/file-uploader.service';
import { MatGridListModule } from '@angular/material/grid-list'
import { FileListComponent } from './file-list/file-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule],
  declarations: [AppComponent, FileUploaderComponent, FileListComponent,MatGridListModule],
  providers: [FileUploaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
