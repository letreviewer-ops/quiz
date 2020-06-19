import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, LoadingController, AlertController, NavController } from '@ionic/angular';
import { AccessProviders } from '../../providers/access-providers';

@Component({
  selector: 'app-examinee-details',
  templateUrl: './examinee-details.page.html',
  styleUrls: ['./examinee-details.page.scss'],
})
export class ExamineeDetailsPage implements OnInit {

  id              :   number;
  examinee_id     :   string;
  examinee_pin    :   string;
  contact_email   :   string;
  fullname        :   string;
  gender          :   string;
  date_birth      :   string;

  constructor(
    private actRoute: ActivatedRoute,
    private accsPrvds: AccessProviders
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => {
      //console.log(data);
      this.id = data.id;
      if(this.id!=0){
        this.loadUser();
      }
    });
  }

  loadUser(){
    return new Promise(resolve => {
      let body = {
        aksi: 'load_single_data',
        id: this.id
      }

      this.accsPrvds.postData(body, 'process_api.php').subscribe((res:any)=>{
        this.id              = res.result.id;
        this.examinee_id     = res.result.examinee_id;
        this.examinee_pin    = res.result.examinee_pin;
        this.contact_email   = res.result.contact_email;
        this.fullname        = res.result.fullname;
        this.gender          = res.result.gender;
        this.date_birth      = res.result.date_birth;
      });
    });
  }
}