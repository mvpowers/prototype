import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import * as AWS from 'aws-sdk';
import { BehaviorSubject } from 'rxjs';
import { NcaFile } from './model/app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'FileUploader';
  mode = 'determinate';
  files: NcaFile[] =[];
  constructor(private ref: ChangeDetectorRef){
  }
  fileEvent(fileInput: any) {
    let i = 0;
    Array.from(fileInput.target.files).forEach((element: { name: string })=>{
      this.files[i] = new NcaFile();
      this.files[i].fileName = element.name;
      this.files[i].progress = 0;
      this.files[i].fileContent = element;
      i++;
    })

    const AWSService = AWS;
    const region = 'us-east-2';
    const bucketName = 'ankitsinghcertara2';
    const IdentityPoolId = 'us-east-2:715b1dc7-1e9d-455e-9e83-7f081c9db510';
    //Configures the AWS service and initial authorization
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
    this.files.forEach(element => {
      //adds the S3 service, make sure the api version and bucket are correct
      const s3 = new AWSService.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: bucketName}
      });
    //I store this in a variable for retrieval later
    var request = s3.putObject({ Key: element.fileName, Bucket: bucketName, Body: element.fileContent, ACL: 'public-read'});
    request.on('httpUploadProgress',  (progress)=> { 
          let percentage = Math.round(progress.loaded/progress.total*100);
          console.log(progress.loaded + " of " + progress.total + " bytes");
          console.log("progress=" + percentage +"%");
          element.progress = percentage;
          this.ref.detectChanges();
    });
    request.send();
    });
     
    /*  s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read'}, function (err, data) {
      if (err) {
        console.log(err, 'there was an error uploading your file');
      }
    });  */
    }
}
