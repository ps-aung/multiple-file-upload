import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FileListComponent } from './file-list/file-list.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileUploaderService } from './services/file-uploader.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [AppComponent, FileUploaderComponent, FileListComponent],
  providers: [FileUploaderService],
  bootstrap: [AppComponent],
})
export class AppModule {}
