/**
 * Created by Mike on 12/5/2015.
 */

angular.module('AngularFire', ['firebase'])

	.factory('angularFireFactory', ['$firebaseObject', '$firebaseArray', function ($firebaseObject, $firebaseArray) {

		var URL = "https://burning-fire-2704.firebaseio.com/comments";
		var ref = new Firebase(URL);
		var obj = $firebaseObject(ref);

		return {
			init: function () {
				obj.$loaded().then(function () {
					console.log("loaded record:", obj.$id);
					// To iterate the key/value pairs of the object, use angular.forEach()
					angular.forEach(obj, function (value, key) {
						console.log(key, value);
					});
				});
			},
			create: function (date, comment, isRead) {
				console.log('add data to fireBase');

				if (comment.length < 4)
					return;

				if (comment === 'Try again, but this time with less profanity.')
					return;

				var list = $firebaseArray(ref);
				list.$add({
					"comment": {
						"date": date,
						"comment": comment,
						"isRead": isRead
					}
				}).then(function (ref) {
					var id = ref.key();
					console.log("added record with id " + id);
					list.$indexFor(id); // returns location in the array
				});
			},
			read: function () {
				console.log(obj);
			},
			update: function () {

			},
			delete: function () {

			}
		}

	}])

	.factory('sanitizeInput', ['$http', function ($http) {
		var badWordList;
		return {
			checkInput: function (word) {
				var isBad = false;
				for (var n = 0; n < badWordList.length; n++) {
					if (word === badWordList[n]) {
						isBad = true;
						break;
					}
				}
				return isBad;
			},
			getBadWords: function () {
				$http({
					method: 'GET',
					url: '../js/json/sanitizeData.json'
				}).then(function successCallback(response) {
					console.log('here is your bad word data!');
					badWordList = response.data.badWords;
				}, function errorCallback(response) {
					console.log('something went very, very wrong.')
				});
			},
			badWords: function () {
				return badWordList;
			}
		}
	}])
