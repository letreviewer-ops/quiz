import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-add-english-question',
  templateUrl: './add-english-question.page.html',
  styleUrls: ['./add-english-question.page.scss'],
})
export class AddEnglishQuestionPage implements OnInit {

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
      this.id = data.id;
    });
  }

  ionViewDidEnter(){
    this.disabledButton = false;
  }

  async submitNewEnglishQuestion(){
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
          aksi: 'add_english_question',
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
            this.navCtrl.navigateRoot(['/add-english-question']);
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
            this.navCtrl.navigateRoot(['/english-question-answer-list']);
          }
        }
      ]
    });
    await alert.present();
  }
}
