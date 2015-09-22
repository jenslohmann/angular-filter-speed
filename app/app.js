"use strict";

angular.module("myApp", ["mgcrea.ngStrap"])
    .factory("dataService", ["$q", function ($q) {
        return {
            persons: function () {
                var deferred = $q.defer();

                var efternavne = ["Jensen", "Nielsen", "Hansen", "Pedersen", "Andersen", "Christensen", "Larsen", "Sørensen", "Rasmussen", "Jørgensen", "Petersen",
                    "Madsen", "Kristensen", "Olsen", "Thomsen", "Christiansen", "Poulsen", "Johansen", "Møller", "Mortensen",
                    "Ahmed", "Ali", "Andersen", "Andersson", "Andreasen", "Andreassen", "Andresen", "Asmussen", "Bach", "Bak", "Bang", "Bech", "Beck", "Bendtsen", "Berg",
                    "Bertelsen", "Berthelsen", "Bjerre", "Bjerregård", "Bjerregaard", "Bonde", "Brandt", "Brodersen", "Bruun", "Buch", "Bundgaard", "Bundgård", "Carlsen",
                    "Carstensen", /*"Christensen",*//*"Christiansen",*/"Christoffersen", "Clausen", "Dahl", "Dalgaard", "Dalgård", "Dalsgård", "Dalsgaard", "Dam", "Damgaard",
                    "Damgård", "Danielsen", "Davidsen", "Enevoldsen", "Eriksen", "Eskildsen", "Fischer", "Frandsen", "Frederiksen", "Friis", "Frost", "Gade", "Gregersen", "Hald",
                    /*"Hansen",*/"Hedegård", "Hedegaard", "Hemmingsen", "Henningsen", "Henriksen", "Hermansen", "Hjorth", "Hoffmann", "Holm", "Holst", "Hougård", "Hougaard",
                    "Ibsen", "Iversen", "Jacobsen", "Jakobsen", /*"Jensen",*/"Jeppesen", "Jepsen", "Jespersen", "Jessen", "Johannesen", "Johannsen", "Johansen", "Johansson",
                    "Johnsen", "Juhl", "Justesen", "Juul", "Jønsson", "Jørgensen", "Karlsen", "Kirkegaard", "Kirkegård", "Kjeldsen", "Kjær", "Kjærgaard", "Kjærgård", "Klausen",
                    "Knudsen", "Koch", "Kofoed", "Kragh", /*"Kristensen",*/"Kristiansen", "Kristoffersen", "Krog", "Krogh", "Kruse", "Lange", /*"Larsen",*/"Lassen", "Lauridsen",
                    "Lauritsen", "Lauritzen", "Laursen", "Laustsen", "Leth", "Lind", "Lorentzen", "Lorenzen", "Lund", /*"Madsen",*/"Markussen", "Mathiasen", "Mathiesen", "Meyer",
                    "Michelsen", "Mikkelsen", "Mogensen", "Mortensen", "Munk", "Müller", "Mølgård", "Mølgaard", "Møller", "Nguyen", /*"Nielsen",*/"Nikolajsen", "Nilsson",
                    "Nissen", "Nygaard", "Nygård", "Nørgård", "Nørgaard", "Olesen", /*"Olsen",*/"Olsson", "Overgaard", "Overgård", "Paulsen", /*"Pedersen",*/"Persson",
                    /*"Petersen",*//*"Poulsen",*//*"Rasmussen",*/"Ravn", "Riis", "Schmidt", "Schou", "Schrøder", "Schultz", "Simonsen", "Skov", "Sommer", "Steffensen",
                    "Svendsen", "Svensson", "Søgård", "Søgaard", "Søndergård", "Søndergaard", /*"Sørensen",*/"Thomassen", "Thomsen", "Thorsen", "Thygesen", "Thøgersen", "Toft",
                    "Vestergaard", "Vestergård", "Villadsen", "Vinther", "Winther", "Østergaard", "Østergård", "Ågård", "Ågaard", "Aagård", "Aagaard"];

                var pigenavne = ["Anne", "Kirsten", "Hanne", "Mette", "Anna", "Helle", "Susanne", "Lene", "Maria", "Marianne", "Inge", "Karen", "Lone", "Bente",
                    "Camilla", "Pia", "Louise", "Charlotte", "Jette", "Tina",
                    "Mathilde", "Laura", "Sofie", "Emma", "Caroline", "Freja", "Ida", "Sara", "Julie", /*"Anna",*/"Cecilie", "Josefine", "Maja", "Clara", "Katrine", "Amalie",
                    "Signe", "Emilie", "Lærke", "Victoria", "Nanna", "Marie", "Alberte", "Isabella", "Frida", "Sofia", /*"Maria",*/"Mille", "Frederikke", "Nicoline", "Camilla",
                    "Liva", "Jasmin", /*"Anne",*/"Andrea", "Astrid", "Thea", "Rebecca", "Olivia", "Lea", /*"Louise",*/"Johanne", "Line", "Alma", "Tilde", "Malou", "Mia", "Emily",
                    "Sille", "Selma"];

                var drengenavne = ["Peter", "Jens", "Lars", "Michael", "Henrik", "Thomas", "Søren", "Jan", "Niels", "Christian", "Martin", "Jørgen", "Hans", "Anders",
                    "Morten", "Jesper", "Ole", "Per", "Mads", "Erik",
                    "Lucas", "Magnus", "Mathias", "Frederik", "Oliver", "Emil", "Mikkel", "Victor", "Tobias", "Sebastian", /*"Mads",*/"Nikolaj", "Rasmus", "Marcus",
                    /*"Christian",*/"Noah", "Jonas", "Jakob", "Kasper", "Oscar", "Andreas", "Alexander", "William", "Simon", "Gustav", "Nicklas", "Malthe", "Daniel", "Benjamin",
                    "Philip", "Christoffer", "Anton", "Jeppe", /*"Anders",*/"Lasse", "Carl", "Silas", "Jonathan", "Marius", "Elias", "August", "Patrick", "Valdemar", "Thomas",
                    "Laurits", "Bertram", "Martin", "David", "Hjalte", "Albert"];

                function efternavn() {
                    return efternavne[Math.floor(Math.random() * efternavne.length)];
                }

                function melleminit() {
                    return Math.random() > 0.5 ? "" : String.fromCharCode(65 + Math.floor(Math.random() * 26)) + ". ";
                }

                function pigenavn() {
                    return pigenavne[Math.floor(Math.random() * pigenavne.length)] + " " + melleminit() + efternavn();
                }

                function drengenavn() {
                    return drengenavne[Math.floor(Math.random() * drengenavne.length)] + " " + melleminit() + efternavn();
                }

                function email(navn) {
                    return navn.toLowerCase().replace(". ", ".").replace(" ", ".") + "@speed.test.email";
                }

                function phoneNo(no) {
                    return "+45" + ("" + (12345678 + no)).substr(-8);
                }

                // OK, this is in sync. Oh well..
                var data = [];
                for (var i = 0; i < 10000; i++) {
                    var name = Math.random() > 0.5 ? drengenavn() : pigenavn();
                    data.push({"name": name, "email": email(name), "phoneNumber": phoneNo(i)});
                }

                deferred.resolve(data);

                return deferred.promise;
            }
        }
    }])
    .controller("dataController", ["$scope", "dataService", "filterFilter", "orderByFilter",
        function ($scope, dataService, filter, orderBy) {
            $scope.filterField = "";
            $scope.filteredPersons = [];
            $scope.persons = [];

            var listener = function () {
                $scope.filteredPersons = filter($scope.persons, $scope.filterField);
                $scope.numberOfMatching = $scope.filteredPersons.length;
                if ($scope.numberOfMatching > 20) {
                    $scope.filteredPersons = [];
                }
            };
            $scope.$watch("filterField", listener);
            dataService.persons()
                .then(function (prsns) {
                          $scope.persons = orderBy(prsns, "name");
                          listener();
                      });

        }]);
