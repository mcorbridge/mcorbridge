/**
 * Created by Mike on 11/12/2015.
 */

angular.module('Media', [])

	.factory('getMedia', function() {
	return {
		getWidth:function(){
			return (window.innerWidth > 0) ? window.innerWidth : screen.width;
		},
		getHeight:function(){
			return (window.innerHeight > 0) ? window.innerHeight : screen.height;
		}
	}
});
