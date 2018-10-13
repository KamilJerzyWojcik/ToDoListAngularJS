var model = {
    user: "Adam"
};

var todoApp = angular.module("todoApp", []);

todoApp.run(function ($http) {

    $http({
        method: 'GET',
        url: '/Home/Items'
    }).then(function successCallback(result) {
        model.items = result.data;
    }, function errorCallback() {
        console.log("Ajax error");
    });
});

todoApp.filter("checkedItems", function () {
    let func = function (items, showComplete) {
        let result = [];
        angular.forEach(items, function (item) {
            if (item.done === false || showComplete === true) {
                result.push(item);
            }
        });

        return result;
    };

    return func;
});

todoApp.controller("ToDoCtrl", function ($scope) {
    $scope.todo = model;

    $scope.incompleteCount = function () {
        var count = 0;
        angular.forEach($scope.todo.items, function (item) {
            if (!item.done) {
                count++;
            }
        });
        return count;
    };

    $scope.warningLevel = function () {
        var level = $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
        return level;
    };

    $scope.addNewItem = function (newItem) {
        $scope.todo.items.push({ action: newItem, done: false });
    };
})