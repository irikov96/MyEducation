function attachEventsListeners() {

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');

    let rations = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    document.getElementById('daysBtn').addEventListener('click', convertOnClick);
    document.getElementById('hoursBtn').addEventListener('click', convertOnClick);
    document.getElementById('minutesBtn').addEventListener('click', convertOnClick);
    document.getElementById('secondsBtn').addEventListener('click', convertOnClick);

    function timeConvert(value, unit) {
        let resultData = value / rations[unit];
        return {
            days: resultData,
            hours: resultData * rations.hours,
            minutes: resultData * rations.minutes,
            seconds: resultData * rations.seconds
        }
    }

    function convertOnClick(e) {
        let input = e.target.parentNode.querySelector('input[type="text"]');
        let userData = Number(input.value);
        let time = timeConvert(userData, input.id);
        days.value = time.days;
        hours.value = time.hours;
        minutes.value = time.minutes;
        seconds.value = time.seconds;
    }


}