/*
 * Module dependencies
 */

import Reflux from 'reflux';
import $ from 'jquery';
import DailyActions from '../actions/DailyActions';
//let
var DailyStore = Reflux.createStore({
    listenables: [DailyActions],
    //imagelist: [],
    dailylist : {},
    //sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
    sourceUrl: 'https://still-plains-00092.herokuapp.com/daily',
    init: function() {
        console.log('init de DailyStore');
        this.fetchList();
    },

    
    fetchList: function() {
        $.ajax({
            url: this.sourceUrl, 
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch complete');
                this.dailylist= data;
                this.trigger(this.dailylist);
            }
        });
      }
});

export default DailyStore;
