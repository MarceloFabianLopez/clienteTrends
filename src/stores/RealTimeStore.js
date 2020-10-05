/*
 * Module dependencies
 */

import Reflux from 'reflux';
import $ from 'jquery';
import RealTimeActions from '../actions/RealTimeActions';
//let
var RealTimeStore = Reflux.createStore({
    listenables: [RealTimeActions],
    //imagelist: [],
    realtimelist : {},
    //sourceUrl: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json',
    sourceUrl: 'https://still-plains-00092.herokuapp.com/realtime',
    init: function() {
        console.log('init de RealTimeStore');
        this.fetchList();
    },

    /* fetchList: function() {
      let tags = [  'nature', 'cities',  'travel' ];
      let randomTag = tags[Math.floor(Math.random()*tags.length)];
      $.ajax({
          url: this.sourceUrl + `&tag=${randomTag}`,
          dataType: 'jsonp',
          jsonpCallback: 'jsonFlickrFeed',
          cache: false,
          context: this,
          success: function(data) {
              console.log('fetch complete');
              this.imagelist = data.items;
              this.trigger(this.imagelist);
          }
      });
    } */
    fetchList: function() {
        //let tags = [  'nature', 'cities',  'travel' ];
        //let randomTag = tags[Math.floor(Math.random()*tags.length)];
        $.ajax({
            url: this.sourceUrl, // + `&tag=${randomTag}`,
            //dataType: 'jsonp',
            //jsonpCallback: 'jsonFlickrFeed',
            cache: false,
            context: this,
            success: function(data) {
                console.log('fetch complete');
                this.realtimelist= data;
                this.trigger(this.realtimelist);
            }
        });
      }
});

export default RealTimeStore;
