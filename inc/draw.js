
var useckaCount = 0;
var useckaSerie = [];

function drawUsecka (a, b, color)
{
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
  useckaCount++;
}

//

var curveSeries = {};

function drawKrivka (data)
{
  points = [];
  $.each(data.points, function(key, val) {
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

//

var dotsSeries = {};

function drawDots (data)
{
  dots = [];
  hh = data.hh;
  $.each(data.points, function(key, val) {
    //console.log(val);
    //max_value = Math.max(0, val.p);
    //heightLimiter = (max_value / data.div) / 2;
    k = (val.lh == 'H')? -1:1;
    dots.push({ time: val.t, open: val.p + k*hh, high: val.p + hh, low: val.p - hh, close: val.p - k*hh });
  });
  index = "" + data.index;

  if (dotsSeries[index] !== undefined)
    chart.removeSeries(dotsSeries[index]);

console.log(data.index +':'+ dots.length);

  if (dots.length > 0)
  {
    dotsSeries[index] = chart.addCandlestickSeries({
      upColor: data.c2,
      downColor: data.c1,
      borderVisible: false,
      wickVisible: false,
      crosshairMarkerVisible: false,
      lastValueVisible: false,
      priceLineVisible: false,
    });
    dotsSeries[index].setData(dots);
  }
}

//

function releaseSeries ()
{
  $.each(useckaSerie, function(key, val) {
    chart.removeSeries(val);
  });
  useckaCount = 0;
  useckaSerie = [];
  //
  $.each(dotsSeries, function(key, val) {
    chart.removeSeries(val);
  });
  dotsSeries = {};
  //
  $.each(curveSeries, function(key, val) {
    chart.removeSeries(val);
  });
  curveSeries = {};
}
