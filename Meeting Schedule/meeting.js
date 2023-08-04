// Creating a Meeting Schedule with virat kohli 
// Details of business user (Hard code them ): BusinessName , FreeHours , acceptedPurpose

function MeetingSchedules(BusinessName, FreeHours, acceptedPurpose) {
    return {
        BusinessName,
        FreeHours,
        acceptedPurpose,
        pendingMeetings: [], //meeting yet to be be approved
        declineMeetings: [], // meeting declined not neccessary
        ApprovedMeetings: [], // meeting approved
        cancelMeetings: [],  // after approved ,later cancelled the meetings
        feedback: '', //feedback to the booking user (user making the booking )

        getFreeHour: function FreeHours() {
            return this.FreeHours;
        },

        getFeedBack: function feedback() {
            return this.feedback;
        },

        newMeeting: function (meeting) {
            const { name, purpose, time } = meeting;

            if (this.FreeHours.indexOf(time) != -1 && this.acceptedPurpose == 'Any') {
                this.pendingMeetings.push(meeting);
                this.feedback = `${name} meeting has been send successfully ,${BusinessName}can now review and approve and approve or decline`;
            } else if (this.acceptedPurpose === purpose.toLowerCase()) {
                this.pendingMeetings.push(meeting);
                this.feedback = `${name} meeting has been send successfully ,${BusinessName}can now review and approve and approve or decline`;
            } else {
                this.feedback = `${name}  the meeting is not suitable for ${BusinessName} `;
            }
        },
        approveMeetings: function (id) {
            var previewMeeting;
            for (var i = 0; i < this.pendingMeetings.length; i++) {
                if (this.pendingMeetings[i]['id'] === id) {
                    previewMeeting = this.pendingMeetings[i];
                }
                this.ApprovedMeetings.push(previewMeeting);
                FreeHours.splice(FreeHours.indexOf(previewMeeting.time), 1);
                this.feedback = `${previewMeeting.name}, your meeting has been approved, time of meeting: ${previewMeeting.time}`;
            }
        },
        DeclineMeetings: function (id) {
            var previewMeeting;
            for (var i = 0; i < this.pendingMeetings.length; i++) {
                if (this.pendingMeetings[i]['id'] === id) {
                    previewMeeting = this.previewMeeting[i];
                }
                this.declineMeetings.push(previewMeeting);
                this.feedback = `${previewMeeting.name}, your meeting was declined for reasons best known to ${this.businessName}`;
            }
        },
        CancelMeeting: function (id) {
            var previewMeeting;

            for (var i = 0; i < this.ApprovedMeetings.length; i++) {
                if (this.ApprovedMeetings[i]['id'] === id)
                    previewMeeting = this.ApprovedMeetings[i]
            }
            this.ApprovedMeetings.splice(previewMeeting, 1);
            this.FreeHours.push(this.ApprovedMeetings.time)
            this.cancelMeetings.push(previewMeeting);
            this.feedback = `${previewMeeting.name}, your meeting with ${BusinessName} scheduled at ${previewMeeting.time} has been canceled with message "this meeting is not needed now"`;
        },
        requestHourCancellation: function (hr) {
            if (this.hoursFree, indexof(hr) !== -1) {
                this.hoursFree.splice(hoursFree.indexof(hr), 1);
            }
        }

    };

}

const Virat_kohli = MeetingSchedules('virat', [2, 3, 4, 5, 6, 7, 8, 9], 'any');
console.log("Today Free hour List");

var meeting1 = {
    id: 1,
    name: "Gaurav Kaushik",
    time: 8,
    purpose: 'any'
}

var meeting2 = {
    id: 2,
    name: 'Sushant',
    time: 9,
    purpose: 'any'
}

console.log("Today's Free hour list")
console.log(Virat_kohli.getFreeHour());

Virat_kohli.newMeeting(meeting1)
console.log(Virat_kohli.getFeedBack());

Virat_kohli.newMeeting(meeting2)
console.log(Virat_kohli.getFeedBack());


// Approve a meeting from pending meetings
Virat_kohli.approveMeetings(1)
console.log(Virat_kohli.getFeedBack());
console.log("See the updated free hour list below")
console.log(Virat_kohli.getFreeHour());

// Cancel meeting form approved meeting
console.log("--------------------------Meeting cancellation--------------------------")
Virat_kohli.CancelMeeting(1);
console.log(Virat_kohli.getFeedBack());
console.log("The cancelled meeting hour is added in the free hours. See the updated free hour list below")
console.log(Virat_kohli.getFeedBack());
console.log(Virat_kohli.getFreeHour());