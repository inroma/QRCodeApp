import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QRreaderPage } from './qrreader';

@NgModule({
  declarations: [
    QRreaderPage,
  ],
  imports: [
    IonicPageModule.forChild(QRreaderPage),
  ],
})
export class QRreaderPageModule {}
