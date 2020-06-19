import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit {

  admin_id   :string = "";
  admin_pin  :string = "";
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

  async adminLogin(){
    if (this.admin_id == ""){
        this.presentToast('Admin ID is required');
    } else if(this.admin_pin == ""){
        this.presentToast('Admin Pin is required');
    } else {
        this.disabledButton = true;
        const loader = await this.loadingCtrl.create({
          message: 'Please wait...',
      });
      
      loader.present();

      return new Promise(resolve => {
        let body = {
          aksi: 'process_admin_login',
          admin_id: this.admin_id,
          admin_pin: this.admin_pin
        }

        this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
          if(res.success == true){
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast('Login Successfully');
              this.storage.set('storage_admin', res.result); // create storage session
              this.navCtrl.navigateRoot(['/admin-menu']);
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
