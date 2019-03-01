import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRgeneratorPage } from './qrgenerator';

@NgModule({
  declarations: [
    QRgeneratorPage,
  ],
  imports: [
    IonicPageModule.forChild(QRgeneratorPage),
  ],
})
export class QRgeneratorPageModule {}
