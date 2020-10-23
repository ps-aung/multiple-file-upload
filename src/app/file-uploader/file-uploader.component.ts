import { EventEmitter, Output, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileQueueObject, FileUploaderService } from '../services/file-uploader.service';

@Component({
  selector: 'app-file-uploader, [app-file-uploader]',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent implements OnInit {

  @Output() onCompleteItem = new EventEmitter();

  @ViewChild('fileInput') fileInput;
  queue: Observable<FileQueueObject[]>;

  constructor(public uploader: FileUploaderService) { }

  ngOnInit() {
    this.queue = this.uploader.queue;
    this.uploader.onCompleteItem = this.completeItem;
  }

  completeItem = (item: FileQueueObject, response: any) => {
    this.onCompleteItem.emit({ item, response });
  }

  addToQueue() {
    const fileBrowser = this.fileInput.nativeElement;
    this.uploader.addToQueue(fileBrowser.files);
  }

}
