var useckaSerie = [];
var usecka_count = 0;

function drawUsecka(a, b, color) {
    useckaSerie[usecka_count] = chart.addLineSeries({
        color: color,
        lineStyle: 0,
        lineWidth: 1,
        crosshairMarkerVisible: false,
        lastValueVisible: false,
        priceLineVisible: false,
    });
    useckaSerie[usecka_count].setData([
        { time: a.t, value: a.p },
        { time: b.t, value: b.p }
    ]);

    usecka_count++;
}

function drawUsecka_delete() {
    $.each( useckaSerie, function( key, val ) {
        //console.log(val);
        chart.removeSeries(val);
    });
    usecka_count = 0;
    useckaSerie = [];
}


// HB

var curveSeries = {};

function drawKrivka(data) {
    //logt(data);

    points = [];
    $.each( data.points, function( key, val ) {
        points.push({ time: val.t, value: val.p });
    });
    index = "" + data.index;
  
    if (curveSeries[index] !== undefined)
      chart.removeSeries(curveSeries[index]);

    if (points.length > 0)
    {
        curveSeries[index] = chart.addLineSeries({
            color: data.color,
            lineStyle: 0,
            lineWidth: 1,
            crosshairMarkerVisible: false,
            lastValueVisible: false,
            priceLineVisible: false,
        });
        curveSeries[index].setData(points);
    }
}
