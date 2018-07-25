import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions} from '@ionic-native/camera';
import { Flashlight } from '@ionic-native/flashlight';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

 base64Image:string;
  constructor(public navCtrl: NavController,private flashlight: Flashlight ,private camera: Camera) {

  }
  sOn(){

    this.flashlight.switchOn();
    console.log("Light is on");
  }
  sOff(){
    
  this.flashlight.switchOff();

    console.log("Light is off");
  }
  sCamera(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });


  }

}
