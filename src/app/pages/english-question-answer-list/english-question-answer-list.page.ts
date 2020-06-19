import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-english-question-answer-list',
  templateUrl: './english-question-answer-list.page.html',
  styleUrls: ['./english-question-answer-list.page.scss'],
})
export class EnglishQuestionAnswerListPage implements OnInit {

  questions     :   any = [];
  limit         :   number = 40; // limit get data
  start         :   number = 40;

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
    this.questions = [];
    this.loadQuestions();
  }

  loadData(){
    this.start += this.limit;
    setTimeout(() => {
      this.loadQuestions().then(() => {
        console.log('Data Loaded Successfully');
      });
    }, 500);
  }

  async loadQuestions(){
    return new Promise(resolve => {
      let body = {
        aksi: 'load_english_questions',
        start: this.start,
        limit: this.limit
      }

      this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
        for(let all_data of res.result){ // special if you want to use infinite scroll load data per limit
          this.questions.push(all_data);
        }
        resolve(true);
      });
    });
  }

  async updateEnglishQuestion(id){
    this.router.navigate(['/update-english-question/' + id]);
  }

  async detailsEnglishQuestion(id){  
    this.router.navigate(['/details-english-question/' + id]);
  }

  async deleteEnglishQuestion(a){
    return new Promise(resolve => { 
      let body = {
        aksi: 'delete_english_question',
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