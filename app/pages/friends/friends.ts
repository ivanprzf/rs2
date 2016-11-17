import {Component} from '@angular/core';
import {Modal, Platform, NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/friends/friends.html'
})
export class FriendsPage {
  constructor(private navController: NavController) {
  }  

  showModal() {
    let modal = Modal.create(MyModal);
    this.navController.present(modal);
  };
}

@Component({
  template: `
  <ion-content padding>
    <h2>I'm a modal!</h2>
    <button (click)="close()">Close</button>
  </ion-content>`
})
class MyModal {
  constructor(
    private viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }
 }