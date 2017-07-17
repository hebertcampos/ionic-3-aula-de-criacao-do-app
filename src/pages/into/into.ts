import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the IntoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-into',
  templateUrl: 'into.html',
})
export class IntoPage {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntoPage');
  }

  irParaTabsPage(){
    this.navCtrl.push(TabsPage)
  }

}
