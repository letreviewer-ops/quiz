import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-details-english-question',
  templateUrl: './details-english-question.page.html',
  styleUrls: ['./details-english-question.page.scss'],
})
export class DetailsEnglishQuestionPage implements OnInit {

  id              :   number;
  question        :   string;
  correct_answer  :   string;
  choice1         :   string;
  choice2         :   string;
  choice3         :   string;

  constructor(
    private actRoute: ActivatedRoute,
    private accsPrvds: AccessProviders
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      //console.log(data);
      this.id = data.id;
      if(this.id!=0){
        this.loadEnglishQuestion();
      }
    });
  }

  loadEnglishQuestion(){
    return new Promise(resolve => {
      let body = {
        aksi: 'load_single_data_english_question',
        id: this.id
      }

      this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
        this.id                 =      res.result.id;
        this.question           =      res.result.question;
        this.correct_answer     =      res.result.correct_answer;
        this.choice1            =      res.result.choice1;
        this.choice2            =      res.result.choice2;
        this.choice3            =      res.result.choice3;
      });
    });
  }
}