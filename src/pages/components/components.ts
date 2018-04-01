import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-components',
  templateUrl: 'components.html',
})
export class ComponentsPage {
  pages: Array<{ title:string, component:string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.pages = [
      { title: 'ActionSheets', component: 'ActionSheetsPage' },
      { title: 'Alerts', component: 'AlertsPage' },
      { title: 'Badges', component: 'BadgesPage' },
      { title: 'Buttons', component: 'ButtonsPage' },
      { title: 'Cards', component: 'CardsPage' },
      { title: 'Checkbox', component: 'CheckboxPage' },
      { title: 'Datetime', component: 'DatetimePage' },
      { title: 'Fabs', component: 'FabsPage' },
      { title: 'Grid', component: 'GridPage' },
      { title: 'Icons', component: 'IconsPage' },
      { title: 'Inputs', component: 'InputsPage' },
      { title: 'Lists', component: 'ListsPage' },
      { title: 'Loading', component: 'LoadingPage' },
      { title: 'Modal', component: 'ModalPage' },
      { title: 'Popover', component: 'PopoverPage' },
      { title: 'Radio', component: 'RadioPage' },
      { title: 'Range', component: 'RangePage' },
      { title: 'Searchbar', component: 'SearchbarPage' },
      { title: 'Segment', component: 'SegmentPage' },
      { title: 'Select', component: 'SelectPage' },
      { title: 'Slides', component: 'SlidesPage' },
      { title: 'Tabs', component: 'TabsPage' },
      { title: 'Toast', component: 'ToastPage' },
      { title: 'Segment', component: 'SegmentPage' },
      { title: 'Select', component: 'SelectPage' },
      { title: 'Tabs', component: 'TabsPage' },
      { title: 'Toast', component: 'ToastPage' },
      { title: 'Toggle', component: 'TogglePage' },
      { title: 'Toolbar', component: 'ToolbarPage' },
    ]
    
  }


}
