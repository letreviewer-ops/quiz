import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-start-exam-english-subject',
  templateUrl: './start-exam-english-subject.page.html',
  styleUrls: ['./start-exam-english-subject.page.scss'],
})
export class StartExamEnglishSubjectPage implements OnInit {

  data            :   any = [];
  limit           :   number = 1; // limit get data
  start           :   number = 1;
  score           :   number = 0;

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
  }

  ionViewDidEnter(){
    this.start = 0;
    this.loadEnglishQuestion();
  }

  async loadEnglishQuestion(){
    return new Promise(resolve => {
      let body = {
        aksi: 'load_single_english_test',
        start: this.start,
        limit: this.limit
      }

      this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
        for(let all_data of res.result){ 
          this.data.push(all_data);
        }
        resolve(true);
      });
    });
  }

}
