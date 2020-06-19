import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-update-english-question',
  templateUrl: './update-english-question.page.html',
  styleUrls: ['./update-english-question.page.scss'],
})
export class UpdateEnglishQuestionPage implements OnInit {

  id                :   number;
  question          :   string;
  correct_answer    :   string;
  choice1           :   string;  
  choice2           :   string;
  choice3           :   string;

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
      //console.log(data);
      this.id = data.id;
      if(this.id!=0){
        this.loadUser();
      }
    });
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  loadUser(){
    return new Promise(resolve => {
      let body = {
        aksi: 'load_single_data_english_question',
        id: this.id
      }

      this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
        this.id               =     res.result.id;
        this.question         =     res.result.question;
        this.correct_answer   =     res.result.correct_answer;
        this.choice1          =     res.result.choice1;
        this.choice2          =     res.result.choice2;
        this.choice3          =     res.result.choice3;
      });
    });
  }

  async updateEnglishQuestion(){
    if(this.question == ""){
        this.presentToast('Question is required');
    } 
    
    else if(this.correct_answer == ""){
        this.presentToast('Contact Answer is required');
    } 
    
    else if(this.correct_answer == this.choice1){
        this.presentToast('One Entry Only!');
    } 

    else if(this.correct_answer == this.choice2){
      this.presentToast('One Entry Only!');
    }

    else if(this.correct_answer == this.choice3){
      this.presentToast('One Entry Only!');
    }
    
    else if(this.choice1 == this.choice2){
        this.presentToast('Choice-1 is required');
    }
    
    else if(this.choice1 == this.choice3){
      this.presentToast('Choice-1 is required');
    } 

    else if(this.choice2 == this.choice3){
      this.presentToast('Choice-1 is required');
    } 

    else if(this.choice1 == ""){
      this.presentToast('Choice-1 is required');
    } 
    
    else if(this.choice2 == ""){
        this.presentToast('Choice-2 is required');
    } 
    
    else if(this.choice3 == ""){
        this.presentToast('Choice-3 is required');
    } 
    
    else {
        this.disabledButton = true;
        const loader = await this.loadingCtrl.create({
          message: 'Please wait...',
      });
      
      loader.present();

      return new Promise(resolve => {
        let body = {
          aksi: 'update_english_question',
          id: this.id,
          question: this.question,
          correct_answer: this.correct_answer,
          choice1: this.choice1,
          choice2: this.choice2,
          choice3: this.choice3
        }

        this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
          if(res.success == true){
              loader.dismiss();
              this.disabledButton = false;
              this.presentToast(res.msg);
              this.router.navigate(['/english-question-answer-list']);
          } else {
              loader.dismiss();
              this.disabledButton = false;
              this.presentAlert(res.msg);
          }
        }, (err) =>{
            loader.dismiss();
            this.disabledButton = false;
            this.presentAlert('Sorry, Network Error!');
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
        text: 'Refresh',
        handler: () => {
          this.navCtrl.navigateRoot(['/english-question-answer-list']);
        }
      }
    ]
    });
    await alert.present();
  }
}