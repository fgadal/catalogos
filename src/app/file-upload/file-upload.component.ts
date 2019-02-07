import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { UploadOutput } from 'ngx-uploader';
import { FigurineImage } from '../figurines/figurine-image.entity';
import { ImageViewerDialogComponent } from '../image-viewer-dialog/image-viewer-dialog.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  @Input()
  set control(control: FormControl) {
    this._control = control;
    this.initPreview();
  }
  get control(): FormControl {
    return this._control;
  }
  // tslint:disable-next-line:variable-name
  private _control: FormControl;

  images: string[] = [];

  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly dialog: MatDialog
  ) {}

  onUploadOutput(output: UploadOutput) {
    if (output.file) {
      const file = output.file.nativeFile;
      this.loadImagePreview(file);

      const reader = new FileReader();
      reader.onload = () => {
        const image = new FigurineImage({
          blob: Buffer.from(reader.result as ArrayBuffer) as any
        });
        const value = [...(this.control.value || []), image];
        this.control.setValue(value);
      };
      reader.readAsArrayBuffer(file);
    }
  }

  getBackgroundUrl(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustStyle('url(' + imageUrl + ')');
  }

  showImage(imageSrc: string) {
    return this.dialog.open(ImageViewerDialogComponent, {
      data: this.sanitizer.bypassSecurityTrustUrl(imageSrc)
    });
  }

  private initPreview() {
    this.images =
      this.control.value && this.control.value.length
        ? (this.control.value as FigurineImage[]).map(image => image.dataURL)
        : [];
  }

  private loadImagePreview(file: File) {
    const reader = new FileReader();
    reader.onload = () => this.images.push(reader.result as string);

    reader.readAsDataURL(file);
  }
}
