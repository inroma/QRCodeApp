import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  QRCode from 'qrcode';
import { Storage } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing';

/**
 * Generated class for the QRgeneratorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qrgenerator',
  templateUrl: 'qrgenerator.html',
})
export class QRgeneratorPage {

  code = 'Enter your text here';
  generated = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private socialSharing: SocialSharing) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRgeneratorPage');
  }

  displayQrCode() {
    return this.generated !== '';
  }

  process() {
    let qrcode = QRCode;
    const self = this;
    qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
      let date: Date = new Date()
      let datestring: string = date.getDate()+'/' + (date.getMonth()+1) + '/'+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
      self.storage.length().then((index) => {self.storage.set(index.toString(), {date: datestring, text: self.code})});
    })
  }

  shareItem() {
    this.socialSharing.shareWithOptions({
      message:'Check this QRCode !',
      subject:"QRCode",
      files: [this.generated],
    })
  }

}
