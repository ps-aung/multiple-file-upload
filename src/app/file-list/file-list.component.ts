import { Component, OnInit } from '@angular/core';
import { EmpDocument, EmpDocuments } from '../model/employeeDocModel';
import { FileUploaderService } from '../services/file-uploader.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.scss'],
})
export class FileListComponent implements OnInit {

  documents: EmpDocument[];
  empDocument: EmpDocuments;
  constructor(private _fileupload: FileUploaderService) {}

  ngOnInit(): void {
    const id = 1;
    this._fileupload._getDownloadList(id).subscribe((res) => {
      if (res) {
        this.empDocument = res;
        console.log(res.documents);
        console.log(this.checkImage(res.documents));
        this.documents = this.checkImage(res.documents);
      }
    });
  }

  ngAfterViewInit(): void {}

  downloadMyFile(doc: EmpDocument) {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', doc.downloadUrl);
    link.setAttribute('download', doc.fileName);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  deleteMyFile(id){
    console.log(id);
  }

  private checkImage(documents) : any{
    let documentsList : EmpDocument[] = [];
    documents.forEach(function (value){
      if(value.fileName.indexOf('txt') !== -1){
        value.downloadUrl = "assets/images/file-txt.png";
      }else if(value.fileName.indexOf('xlsx') !== -1){
        value.downloadUrl = "assets/images/file-excel.png";
      }else if(value.fileName.indexOf('pdf') !== -1){
        value.downloadUrl = "assets/images/file-pdf.png";
      }else if(value.fileName.indexOf('png') !== -1){
        value.downloadUrl = "assets/images/file-png.png";
      }else if(value.fileName.indexOf('pp') !== -1){
        value.downloadUrl = "assets/images/file-pp.png";
      }else if(value.fileName.indexOf('docx') !== -1){
        value.downloadUrl = "assets/images/file-word.png";
      }else{
        value.downloadUrl = "assets/images/file-unknown.png";
      }
      documentsList.push(value);
    });
    return documentsList;
  }
}
