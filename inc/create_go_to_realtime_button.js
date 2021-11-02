//Tlačítko které se ukáže když člověk není na konci grafu
function create_go_to_realtime_button() {
    let go_to_realtime_button = $('.go-to-realtime-button');
    let button_size = 28;
    go_to_realtime_button.css("color", '#4c525e');
    go_to_realtime_button.html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14" height="14"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6.5 1.5l5 5.5-5 5.5M3 4l2.5 3L3 10"></path></svg>');

    chart.timeScale().subscribeVisibleTimeRangeChange(function() {
        let buttonVisible = chart.timeScale().scrollPosition() < 0;
        go_to_realtime_button.css("display", buttonVisible ? 'block' : 'none');
    });

    go_to_realtime_button.on( "click", function() {
        chart.timeScale().scrollToPosition(50, true);
    });

    go_to_realtime_button.on( "mouseover", function() {
        go_to_realtime_button.css("background", 'rgba(250, 250, 250, 1)');
        go_to_realtime_button.css("color", '#000');
    });

    go_to_realtime_button.on( "mouseout", function() {
        go_to_realtime_button.css("background", 'rgba(250, 250, 250, 0.6)');
        go_to_realtime_button.css("color", '#4c525e');
    });
}