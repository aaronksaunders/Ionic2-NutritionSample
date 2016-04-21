import {Injectable}     from 'angular2/core';
import {Http, Response, URLSearchParams} from 'angular2/http';
// Add all operators to Observable, needed for adding
// .map() on to the end of the http request
import 'rxjs/Rx';


// allow this service to be injected into other components
@Injectable()
export class DataService {

    // set URL for API
    private BASE_URL = 'https://api.nutritionix.com/v1_1/search/';  // URL to web api
    private APP_ID = '8abbcd8e'
    private API_KEY = '36e8d264537037ee7e832a41902ffe57'
    constructor(private http: Http) { }
    /**
     * 
     */
    getSearchResults(_searchString) {

        // fields to get back from API based on documenation
        let fields = 'brand_id,item_name,item_id,brand_name,nf_calories,nf_total_fat';

        // set the parameters for the http request, these will be 
        // added to the query string
        let params: URLSearchParams = new URLSearchParams();
        params.set('results', '0:50')
        params.set('appId', this.APP_ID);
        params.set('appKey', this.API_KEY);
        params.set('fields', fields)

        // construct the URL, adding the search term to the url
        let url = this.BASE_URL + _searchString
        
        // execute the http get request, passing in query tring parameters
        // use the .map() to convert results to JSON to be returned to
        // the caller
        return this.http.get(url, { search: params })
            .map(res => res.json())

    }

}