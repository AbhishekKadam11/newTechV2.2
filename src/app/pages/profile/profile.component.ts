import { Component, EventEmitter , OnInit, ViewEncapsulation } from '@angular/core';
import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';

// import { FancyImageUploaderOptions, UploadedFile } from 'ng2-fancy-image-uploader';
import { ProfileService } from './profile.service'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  // private states: Array<any> = [];
  // private cities: Array<any> = [];
  // private citylist: Array<any> = [];
  // private city: string = '';
  public profile;  // model
  savedSuccess: boolean = false;
  saveUnsuccess: boolean = false;

  formData: FormData;
  files: UploadFile[];
  uploadInput: EventEmitter<UploadInput>;
  humanizeBytes: Function;
  dragOver: boolean;
 // options: UploaderOptions;
  percent: number;
  uploading: boolean;
  public defaultPicture = 'assets/images/no-photo.png';
  picture;
  imagePreview;
  // options: FancyImageUploaderOptions = {
  //   thumbnailHeight: 150,
  //   thumbnailWidth: 150,
  //   uploadUrl: 'http://localhost:8080/api/upload',
  //   allowedImageTypes: ['image/png', 'image/jpeg'],
  // //  maxImageSize: 3,
  // };



  constructor(private profileService: ProfileService) {
    // this.uploading = false;
    // this.options = { concurrency: 1 };
    // this.files = [];
    // this.uploadInput = new EventEmitter<UploadInput>();
    // this.humanizeBytes = humanizeBytes;
  }

  ngOnInit() {
    this.profileService.getProfileData().subscribe((result) => {
      this.profile = result.userData;
    //  console.log(result);
    })
  }

  // onUpload(file: UploadedFile) {
  //   console.log(file);
  // }
//   onUploadOutput(output: UploadOutput): void {
//     if (output.type === 'allAddedToQueue') {
//       const event: UploadInput = {
//         type: 'uploadAll',
//         url: 'http://localhost:8080/api/upload',
//         method: 'POST',
//         data: { foo: 'bar' }
//       };
//       this.uploadInput.emit(event);
//     } else if (output.type === 'addedToQueue'  && typeof output.file !== 'undefined') {
//       // var filesArray = (output.nativeFile);
//       // console.log(filesArray);
//       // this.previewImagem(filesArray).then(response => {
//       //   this.imagePreview = response; // The image preview
//       //   this.files.push(output.file);
//       // });
//
//       this.files.push(output.file);
//     } else if (output.type === 'uploading' && typeof output.file !== 'undefined') {
//       this.uploading = true;
//       const index = this.files.findIndex(file => typeof output.file !== 'undefined' && file.id === output.file.id);
//       this.files[index] = output.file;
//     } else if (output.type === 'removed') {
//       this.files = this.files.filter((file: UploadFile) => file !== output.file);
//     } else if (output.type === 'dragOver') {
//       this.dragOver = true;
//     } else if (output.type === 'dragOut') {
//       this.dragOver = false;
//     } else if (output.type === 'drop') {
//       this.dragOver = false;
//     }
//
//     let uploadInProgress = false;
//     let percent = 0;
//
//     this.files.forEach(file => {
//       if (file.progress.status !== UploadStatus.Done) {
//         uploadInProgress = true;
//       }
//
//       if (file.progress.data) {
//         percent += file.progress.data.percentage;
//       }
//     });
//
//     this.uploading = uploadInProgress;
//     this.percent = percent / this.files.length;
//   }
//
//   startUpload(): void {
//     const event: UploadInput = {
//       type: 'uploadAll',
//       url: 'http://localhost:8080/api/upload',
//       method: 'POST',
//       data: { foo: 'bar' }
//     };
//
//     this.uploadInput.emit(event);
//   }
//
//   cancelUpload(id: string): void {
//     this.uploadInput.emit({ type: 'cancel', id: id });
//   }
//
//   removeFile(id: string): void {
//     this.uploadInput.emit({ type: 'remove', id: id });
//   }
//
//   removeAllFiles(): void {
//     this.uploadInput.emit({ type: 'removeAll' });
//   }
//
//   public removePicture(): boolean {
//     this.picture = '';
//     return false;
//   }
// // The preview function
//   previewImagem(file: any) {
//     const fileReader = new FileReader();
//     return new Promise(resolve => {
//       fileReader.readAsDataURL(file);
//       fileReader.onload = function (e: any) {
//         resolve(e.target.result);
//       }
//     });
//   }

  setProfile(profile) {
   // console.log(profile);
    this.profileService.setprofileData(profile)
      .subscribe((result) => {
        this.savedSuccess = true;
        setTimeout(() => {
          this.savedSuccess = false;
        }, 3000);
      },(err)=> {
        this.saveUnsuccess = true;
        setTimeout(() => {
          this.saveUnsuccess = false;
        }, 3000);
      });
  }


}
