this.default = function () {
    var data = new ej.base.extend([], window.zooEventsData, null, true);
    var scheduleObj = new ej.schedule.Schedule({
        width: '100%',
        height: '550px',
        selectedDate: new Date(2018, 1, 15),
        eventSettings: { dataSource: data },
        eventRendered: function (args) {
            window.applyCategoryColor(args, scheduleObj.currentView);
        }
    });
    scheduleObj.appendTo('#Schedule');

    //Focus the Schedule Control (alt+j) key combination
    document.body.addEventListener('keydown', function (e) {
        var scheduleElement = document.getElementById('Schedule');
        if (e.altKey && e.keyCode === 74 && scheduleElement) {
            scheduleElement.focus();
        }
    });
};