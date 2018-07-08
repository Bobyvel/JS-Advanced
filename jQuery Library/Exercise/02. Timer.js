function timer() {

    let time=0, intervalId, isRunning = false;
    let startBtn = $('#start-timer');
    let pauseBtn = $('#stop-timer');

    startBtn.on('click', function () {
        if(! isRunning){
            intervalId = setInterval(incrementTime, 1000);
            isRunning = true;
        }
        // startBtn.attr('disabled', true);
        // pauseBtn.attr('disabled', false);
    });

    pauseBtn.on('click', function () {
        clearInterval(intervalId);
        isRunning = false;
        // startBtn.attr('disabled', false);
        // pauseBtn.attr('disabled', true);
    });

    function incrementTime() {
        time++;
        $('#hours').text(("0" + Math.trunc(time/3600)).slice(-2));
        $('#minutes').text(("0" + Math.trunc((time/60)%60)).slice(-2));
        $('#seconds').text(("0" + Math.trunc(time%60)).slice(-2));
    }


}