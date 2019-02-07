import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatToolbarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUploaderModule } from 'ngx-uploader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateParticularityDialogComponent } from './figurines/create-particularity-dialog/create-particularity-dialog.component';
import { FigurineCreatePageComponent } from './figurines/figurine-create-page/figurine-create-page.component';
import { FigurineEditPageComponent } from './figurines/figurine-edit-page/figurine-edit-page.component';
import { FigurineFormComponent } from './figurines/figurine-form/figurine-form.component';
import { FigurineListComponent } from './figurines/figurine-list/figurine-list.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { ImageViewerDialogComponent } from './image-viewer-dialog/image-viewer-dialog.component';
import { ParticularitySelectorComponent } from './particularity-selector/particularity-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FigurineListComponent,
    FigurineFormComponent,
    FigurineCreatePageComponent,
    FigurineEditPageComponent,
    ParticularitySelectorComponent,
    CreateParticularityDialogComponent,
    FileUploadComponent,
    ImageViewerDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgxUploaderModule
  ],
  entryComponents: [
    CreateParticularityDialogComponent,
    ImageViewerDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
