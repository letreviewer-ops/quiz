import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController} from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-take-test',
  templateUrl: './take-test.page.html',
  styleUrls: ['./take-test.page.scss'],
})
export class TakeTestPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  englishSubject(){
    this.router.navigate(['/start-exam-english-subject']);
  }

  filipinoSubject(){
    this.router.navigate(['/start-exam-filipino-subject']);
  }

  mathematicsSubject(){
    this.router.navigate(['/start-exam-math-subject']);
  }

  scienceSubject(){
    this.router.navigate(['/start-exam-science-subject']);
  }

  socialStudiesSubject(){
    this.router.navigate(['/start-exam-social-studies-subject']);
  }
}
