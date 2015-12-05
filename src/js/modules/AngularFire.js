/**
 * Created by Mike on 12/5/2015.
 */

angular.module('AngularFire', ['firebase'])


	.controller('angularFireInit', ['$scope', '$rootScope', '$firebaseObject', '$firebaseArray', function ($scope, $rootScope, $firebaseObject, $firebaseArray) {

		console.log('--------------------> angularFireInit');

		//var URL = "https://burning-fire-2704.firebaseio.com/teams/bruins/players";
		var URL = "https://burning-fire-2704.firebaseio.com/comments";

		var ref = new Firebase(URL);

		var obj = $firebaseObject(ref);

		// to take an action after the data loads, use the $loaded() promise
		obj.$loaded().then(function () {
			console.log("loaded record:", obj.$id, obj.someOtherKeyInData);

			// To iterate the key/value pairs of the object, use angular.forEach()
			angular.forEach(obj, function (value, key) {
				console.log(key, value);
			});

			//addFirebaseData();
		});

		// To make the data available in the DOM, assign it to $scope
		$scope.data = obj;

		// For three-way data bindings, bind it to the scope instead
		//obj.$bindTo($scope, "data");

		var addFirebaseData = function () {
			console.log('add data to fireBase');
			var list = $firebaseArray(ref);
			/*list.$add({ fname: "David", lname:"Pastrnak"}).then(function(ref) {
			 var id = ref.key();
			 console.log("added record with id " + id);
			 list.$indexFor(id); // returns location in the array
			 });*/
			list.$add({
				"comment": {
					"date": "dec-4-2015",
					"comment": "today is the opening of 5 Elements",
					"isRead": "true"
				}
			}).then(function (ref) {
				var id = ref.key();
				console.log("added record with id " + id);
				list.$indexFor(id); // returns location in the array
			});
		}

	}])
