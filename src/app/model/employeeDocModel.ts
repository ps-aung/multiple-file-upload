export class EmpDocuments {
    totalDocuments : number;
    documents : EmpDocument[];
}

export class EmpDocument {
    documentId : number;
    fileName : string;
    downloadUrl : string;
    category: string;
}