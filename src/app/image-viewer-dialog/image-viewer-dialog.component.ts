import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-image-viewer-dialog',
  templateUrl: './image-viewer-dialog.component.html',
  styleUrls: ['./image-viewer-dialog.component.css']
})
export class ImageViewerDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public readonly imageSrc: string) {}

  ngOnInit() {}
}
