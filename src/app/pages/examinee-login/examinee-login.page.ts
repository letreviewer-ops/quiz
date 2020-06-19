import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-examinee-login',
  templateUrl: './examinee-login.page.html',
  styleUrls: ['./examinee-login.page.scss'],
})
export class ExamineeLoginPage implements OnInit {

  examinee_id   :string = "";
  examinee_pin  :string = "";
  
  disabledButton;
  
  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders,
    private storage: Storage,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  async examineeLogin(){
    if (this.examinee_id == ""){
        this.presentToast('Examinee ID is required');
    } else if(this.examinee_pin == ""){
        this.presentToast('Examinee Pin is required');
    } else {
        this.disabledButton = true;
        const loader = await this.loadingCtrl.create({
          message: 'Please wait...',
      });
      
      loader.present();

      return new Promise(resolve => {
        let body = {
          aksi: 'process_examinee_login',
          examinee_id: this.examinee_id,
          examinee_pin: this.examinee_pin
        }

        this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
          if(res.success == true){
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast('Login Successfully');
              this.storage.set('storage_xxx', res.result); // create storage session
              this.navCtrl.navigateRoot(['/examinee-menu']);
          } else {
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast('ID or Pin is wrong.');
          }
        }, (err) =>{
            loader.dismiss();
            this.disabledButton = false;
            this.presentToast('Timeout');
        });
      });
    }
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500
    });
    toast.present();
  }
}
