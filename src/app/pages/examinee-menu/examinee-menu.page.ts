import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-examinee-menu',
  templateUrl: './examinee-menu.page.html',
  styleUrls: ['./examinee-menu.page.scss'],
})

export class ExamineeMenuPage implements OnInit {

  datastorage: any;
  welcome_id: string;

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
    this.storage.get('storage_xxx').then((res)=>{
      //console.log(res);
      this.datastorage = res;
      this.welcome_id = this.datastorage.examinee_id;
    });
  }

  async processLogout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['/examinee-login']);
    const toast = await this.toastCtrl.create({
      message: 'Logout Successfully',
      duration: 1500
    });
    toast.present();
  }
}
