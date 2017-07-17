import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  somaNun: any;
  public nomeUser: string = "Hebert do cod";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaNum(num1:number, num2:number): void{
    //alert(num1+num2);
  }

  ionViewDidLoad() {
    //this.somaNum(10, 10);
  }

}