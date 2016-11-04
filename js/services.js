angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('LoginService', function($q) {
	return {
        loginUser: function(login, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (login == '12345678900' && pw == 'secret') {
                deferred.resolve('Bem vinda Amanda!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.service('BlankService', [function(){

}]);
