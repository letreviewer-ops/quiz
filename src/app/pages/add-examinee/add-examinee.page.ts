import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-add-examinee',
  templateUrl: './add-examinee.page.html',
  styleUrls: ['./add-examinee.page.scss'],
})

export class AddExamineePage implements OnInit {

  id              :   number;
  examinee_id     :   string;
  examinee_pin    :   number;
  contact_email   :   string;
  fullname        :   string;
  gender          :   string;
  date_birth      :   string;

  disabledButton;

  constructor(
    private router: Router,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private accsPrvds: AccessProviders,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any)=>{
      //console.log('prepare to add new data in the empty object');
      this.id = data.id;
    });
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  async submitNewExaminee(){
    if (this.examinee_id == null && this.examinee_id == ""){
        this.presentToast('Examinee ID is required');
    } else if(this.examinee_pin == null){
        this.presentToast('Examinee Pin is required');
    } else if(this.contact_email == ""){
        this.presentToast('Contact Email is required');
    } else if(this.fullname == ""){
        this.presentToast('Fullname is required');
    } else if(this.gender == ""){
        this.presentToast('Gender is required');
    } else if(this.date_birth == ""){
        this.presentToast('Date of Birth is required');
    } else {
        this.disabledButton = true;
        const loader = await this.loadingCtrl.create({
          message: 'Please wait...',
      });
      
      loader.present();

      return new Promise(resolve => {
        let body = {
          aksi: 'add_examinee',
          id: this.id,
          examinee_id: this.examinee_id,
          examinee_pin: this.examinee_pin,
          contact_email: this.contact_email,
          fullname: this.fullname,
          gender: this.gender,
          date_birth: this.date_birth
        }

        this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
          if(res.success == true){
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast(res.msg);
              this.router.navigate(['/examinee-list']);
          } else {
              loader.dismiss();
              this.disabledButton = false;
              this.presentAlert(res.msg);
          }
        }, (err) =>{
            loader.dismiss();
            this.disabledButton = false;
            this.errorAlert('Sorry, Network Error!');
        });
      });
    }
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'middle'
    });
    toast.present();
  }

  async presentAlert(a){
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [{
          text: 'Try Again!',
          handler: () => {
            this.navCtrl.navigateRoot(['/add-examinee']);
          }
        }
      ]
    });
    await alert.present();
  }

  async errorAlert(a){
    const alert = await this.alertCtrl.create({
      header: a,
      backdropDismiss: false,
      buttons: [{
          text: 'Refresh',
          handler: () => {
            this.navCtrl.navigateRoot(['/examinee-list']);
          }
        }
      ]
    });
    await alert.present();
  }
}
