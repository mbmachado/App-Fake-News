import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class ResultPage {
	private API_URL = 'https://api.fakenewsdetector.org/';
	public text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public http: Http) {
  	this.text = navParams.get('data');
  }

  ionViewDidLoad() {
  	let loader = this.loadingCtrl.create({spinner: "crescent" , content: "Carregando"});
  	let headers = new Headers();

  	loader.present();
    headers.append('Content-Type', 'application/json');

    this.http.get(this.API_URL + 'votes_by_content?content=' + encodeURI(this.text), {headers}).subscribe(
  		(result: any) => {
        console.log(result.json());
        loader.dismiss();
      },
      (error: any) => {
        console.log(error.json());
        loader.dismiss();
    });
  }
}
