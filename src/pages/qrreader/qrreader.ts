import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { jsqrcode } from 'jsqrcode/src/QRCode';

/**
 * Generated class for the QRreaderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrreader',
  templateUrl: 'qrreader.html',
})
export class QRreaderPage {
  scannedData:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRreaderPage');
  }

  startReader() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }

  readFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = (evt) => {
      var target: any = evt.currentTarget;
      var image = new Image();
      image.onload = () => {
        var QrDecoder = new jsqrcode();
        this.scannedData = QrDecoder.decode(image);
      };
      image.src = target.result;
    }
    reader.readAsDataURL(file);
  }
}
