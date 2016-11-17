import {Component} from '@angular/core'
import {ProfilePage} from '../profile/profile';
import {BoardPage} from '../board/board';
import {FriendsPage} from '../friends/friends';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = ProfilePage;
    this.tab2Root = BoardPage;
    this.tab3Root = FriendsPage;
  }
}
