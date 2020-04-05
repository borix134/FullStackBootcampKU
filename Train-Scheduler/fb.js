var firebaseConfig = {
    apiKey: "AIzaSyAHhb_obGgFcHKtRToHQ3FPmpp17xA98W0",
    authDomain: "thebestdatabase-67d89.firebaseapp.com",
    databaseURL: "https://thebestdatabase-67d89.firebaseio.com",
    projectId: "thebestdatabase-67d89",
    storageBucket: "thebestdatabase-67d89.appspot.com",
    messagingSenderId: "644479964175",
    appId: "1:644479964175:web:e5eb5197521879c6d87f7a"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

database.ref().on("child_added", function(snapshot, key) {

    /*  I could not get momentjs working
        var timeArr = tFirstTrain.split(":");
        var trainTime = moment()
          .hours(timeArr[0])
          .minutes(timeArr[1]);
        var maxMoment = moment.max(moment(), trainTime);
        var tMinutes;
        var tArrival;

        if (maxMoment === trainTime) {
          tArrival = trainTime.format("hh:mm A");
          tMinutes = trainTime.diff(moment(), "minutes");
        } else {

          var differenceTimes = moment().diff(trainTime, "minutes");
          var tRemainder = differenceTimes % tFrequency;
          tMinutes = tFrequency - tRemainder;
          tArrival = moment()
            .add(tMinutes, "m")
            .format("hh:mm A");
        }
    */

    var newRow = $("<tr>");
    newRow.append($("<td>").text(snapshot.val().trainName))
    newRow.append($("<td>").text(snapshot.val().destination));
    newRow.append($("<td>").text(snapshot.val().frequency));
    newRow.append($("<td>").text());
    $("#trains").append(newRow);
});

$("#submit").on("click", function(){
    database.ref().push({
        trainName: $("#trainName").val(),
        destination: $("#destination").val(),
        fTrainTime: $("#fTrainTime").val(),
        frequency: $("#frequency").val()
    })
    $("#trainName").val("");
    $("#destination").val("");
    $("#fTrainTime").val("");
    $("#frequency").val("");
});
