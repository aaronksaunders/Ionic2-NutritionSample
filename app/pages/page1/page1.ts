import {Page} from 'ionic-angular';
import { DataService } from '../../dataService';
import {
  OnInit,
  OnDestroy
} from 'angular2/core';


@Page({
  templateUrl: 'build/pages/page1/page1.html',
  providers: [DataService]
})
export class Page1 implements OnInit, OnDestroy {

  // the first page of the app
  rootPage: any = Page1;

  // the array of items found
  items

  // the search string
  searchQuery

  constructor(private _dataService: DataService) {

    // be sure to initizalize the model objects to avoid
    // weird errors in the console

    // the array of items found
    this.items = [];

    // the search string
    this.searchQuery = ""
  }

  /**
   * do any initialization here NOT in the constructor
   */
  ngOnInit() {
    console.log('onInit');
  }

  ngOnDestroy() {
    console.log('onDestroy');
  }

  /**
   * query the API with the specific search string
   */
  getItems() {
    // clean up the string, if empty then exit
    let q = this.searchQuery.trim()
    if (q == '') {
      return;
    }

    // have a string, do the search
    this._dataService.getSearchResults(q)
      .subscribe(
        // process the results..
        (data) => {
          console.log('search results', data.hits)
          this.items = data.hits
        },
        // handle an error condition...
        (err) => alert("Error Searching: " + err),
        // called when completely done processing
        () => { console.log("All Good With The Data") }
      );
  }


}
