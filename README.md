# Ionic2-NutritionSample

This is a sample application based on off a Ionic2 to show the use of http in an application. 

In this example, we are using https://developer.nutritionix.com/for nutrition information; showing how to access REST API using ngFor directive for rendering the data.

####Function in service to query REST API
```javascript
    getSearchResults(_searchString) {

        // fields to get back from API based on documenation
        let fields = 'brand_id,item_name,item_id,brand_name,nf_calories,nf_total_fat';

        // set the parameters for the http request, these will be 
        // added to the query string
        let params: URLSearchParams = new URLSearchParams();
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
```

####Use the service to get the data
```javascript
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
```