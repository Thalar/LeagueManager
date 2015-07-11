LeagueManager.directive('articleReader', function(Restangular){
	return {
		restrict: 'E',
		templateUrl: 'views/reader.html',
		controller: function($scope, $timeout) {
			//Variable d'affichage de la liseuse
			$scope.reader = false;
			//Affichage/masquage des articles
			$scope.displayReader = function(articleID){
				//Récupération de l'article via l'API REST (à venir)
				//if(articleID){};

				//Affichage/masquage des div
				$scope.reader = !$scope.reader;
			};

    }
  }
});