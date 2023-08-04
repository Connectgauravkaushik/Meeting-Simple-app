var MeetingTime = ["02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00"];
var startTime = document.getElementById("startTime");
var freeHours = document.getElementById("free-hours");
var mybutton = document.getElementById("mybutton");
var mypop = document.getElementById("myPopup");

mybutton.addEventListener("click", function () {
    for (var i = 0; i < MeetingTime.length; i++) {
        if (startTime.value == MeetingTime[i]) {
            alert("Meeting Scheduled");
            mypop.classList.add("show");
            return true;
        }
    }
    if (i == MeetingTime.length) {
        freeHours.innerText = "Available Time : 02:00 , 03:00  , 04:00 , 5:00, 06:00, 07:00, 08:00";
        freeHours.style.color = "red";
        freeHours.style.fontSize = "20px";
        freeHours.style.height = "0px";
        alert("MeetingTime you have entered is not available!!");


    }
});

closePopup.addEventListener("click", function () {
    mypop.classList.remove("show");
});


window.addEventListener("click", function (event) {
    if (event.target == mypop) {
        mypop.classList.remove("show");
    }
});



