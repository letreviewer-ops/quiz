import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.page.html',
  styleUrls: ['./admin-menu.page.scss'],
})
export class AdminMenuPage implements OnInit {

  datastorage: any;
  role: string;

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
    this.storage.get('storage_admin').then((res)=>{
      //console.log(res);
      this.datastorage = res;
      this.role = this.datastorage.role;
    });
  }

  async processLogout(){
    this.storage.clear();
    this.navCtrl.navigateRoot(['/admin-login']);
    const toast = await this.toastCtrl.create({
      message: 'Logout Successfully',
      duration: 1500
    });
    toast.present();
  }
}
