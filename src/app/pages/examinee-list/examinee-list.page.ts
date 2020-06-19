import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-examinee-list',
  templateUrl: './examinee-list.page.html',
  styleUrls: ['./examinee-list.page.scss'],
})
export class ExamineeListPage implements OnInit {

  examinees     :   any = [];
  limit         :   number = 10; // limit get data
  start         :   number = 0;

  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private accsPrvds: AccessProviders,
    private toastCtrl: ToastController,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.start = 0;
    this.examinees = [];
    this.loadExaminees();
  }

  async doRefresh(event) {
    const loader = await this.loadingCtrl.create({
      message: 'Please wait ...',
    });
    this.ionViewDidEnter();
    event.target.complete();

    loader.dismiss();
  }

  loadData(){
    this.start += this.limit;
    setTimeout(() => {
      this.loadExaminees().then(() => {
        console.log('Data Loaded Successfully');
      });
    }, 500);
  }

  async loadExaminees(){
    return new Promise(resolve => {
      let body = {
        aksi: 'load_examinees',
        start: this.start,
        limit: this.limit
      }

      this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
        for(let all_data of res.result){ // special if you want to use infinite scroll load data per limit
          this.examinees.push(all_data);
        }
        resolve(true);
      });
    });
  }

  async updateExaminee(id){
    this.router.navigate(['/update-examinee/' + id]);
  }

  async detailsExaminee(id){  
    this.router.navigate(['/examinee-details/' + id]);
  }

  async deleteExaminee(a){
    return new Promise(resolve => { 
      let body = {
        aksi: 'delete_user',
        id: a
      }

      this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
        if(res.success == true){
          this.presentToast('Delete Success');
          this.ionViewDidEnter();
        } else {
          this.presentToast('Delete Error');
        }
      });
    });
  }

  async presentToast(a){
    const toast = await this.toastCtrl.create({
      message: a,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }
}
