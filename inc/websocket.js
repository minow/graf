function init_websocket() {
		ws_force_stop = false;

		socket = new WebSocket('wss://ws-cstor.efik.cz');

		// Connection opened
		socket.addEventListener('open', function (event) {
				send_parms_websocket();
		});

		// Listen for messages
		socket.addEventListener('message', function (event) {
						let server_response = JSON.parse(event.data);
						//console.log(server_response);

						if (server_response.t !== undefined) { // 't'
								//Jen pokud zrovna neprobíhá načítání starších dat
								if (!pridatStarsiDataDoGrafu_locked && povoleni_k_pridavani_novych_svicek) {
										//Přidáme novou svíčku
										updateLastBar(server_response);
								}
						} else if (server_response.new_ts !== undefined) {
								new_ts(server_response.new_ts);
						} else if (server_response.dots !== undefined) {
								//Draw DOTS

								$.each( server_response.dots.data, function( key, val ) {

										let nalezeno = false;
										let i;
										for (i = 0; i < data_pro_graf.length; i++) {
												if (data_pro_graf[i].time === val.t) {
														nalezeno = true;
												}
										}

										//Hodíme alert že nebylo nalezeno
										//if (!nalezeno) alert("Čas DOTu nesouhlasí s časem svíčky. Čas DOTu: " + naformatujTimestamp(val.t));

										dotsSerie[dots_count] = chart.addCandlestickSeries({
												upColor: val.c,
												downColor: val.c,
												borderVisible: false,
												wickVisible: false,
												crosshairMarkerVisible: false,
												lastValueVisible: false,
												priceLineVisible: false,
										});

										//Pojdmě spočítat výšku
										min_value = 0;
										max_value = 0;

										if (max_value < val.p) max_value = val.p;

										//var heightLimiter = ((max_value - min_value) / ((chart_height/(chart_width/limit))*0.8))/2;
										heightLimiter = (max_value / server_response.dots.div) / 2;

										dotsSerie[dots_count].setData([{ time: val.t, open: val.p + heightLimiter, high: val.p + heightLimiter, low: val.p - heightLimiter, close: val.p - heightLimiter }]);
										allDotsSerie.push(dotsSerie[dots_count]);
										allDotsSerieData.push({ key: dots_count, time: val.t, value: val.p });

										dots_count++;
								});
						} else if (server_response.new_parms !== undefined) {
								//jiné páry a timeframe
								$('.timeframe_button').removeClass("active");
								$('#timeframe_' + server_response.new_parms.tf).addClass("active");
								$("#pairs").val(server_response.new_parms.pair);
								active_timeline_button = server_response.new_parms.tf;
								active_timeframe_krok = parseInt(active_timeframe_krok = $('#timeframe_' + server_response.new_parms.tf).attr('data-krok'));
								pripravitDataProGraf();
						} else if (server_response.pos_buttons !== undefined) {
								//pos_buttons
								$("#pos_buttons").html('');
								$.each( server_response.pos_buttons, function( key, val ) {
										$("#pos_buttons").append("<a href='#' class='button' onclick='new_ts("+ val.t +"); return false;'>"+ val.text +"</a>");
								});
						} else if (server_response.cl_dots !== undefined) {
								//cl_dots = smaže všechny dots
								dots_delete();
								drawUsecka_delete();
						} else if (server_response.lines !== undefined) {
								//draw usecka
								$.each( server_response.lines, function( key, val ) {
										drawUsecka(val.A, val.B, val.c);
								});
						} else if (server_response.action !== undefined && server_response.action == "restart") {
								//Nové načtení grafu
								pripravitDataProGraf();
						} else if (server_response.curve !== undefined) {
								//draw krivka
								drawKrivka(server_response.curve);
						}
						else {
								alert("Neznámé ws: "+ event.data);
						}
		});

}

function send_parms_websocket() {
		socket.send('{"action": "parms", "pair": "'+ $('#pairs').val() +'", "tf": "'+ active_timeline_button +'", "ts": '+ data_pro_graf[data_pro_graf.length - 1].time +', "n": '+ (data_pro_graf.length - 1) +', "mode": "'+ (test_mode? 't':'r') + '"}');
}

function close_websocket() {
		ws_force_stop = true;
		socket.close();
}

function toggle_candles_websocket(force_off = null) {
		if (povoleni_k_pridavani_novych_svicek || force_off === true) {
				povoleni_k_pridavani_novych_svicek = false;
				$("#button_toggle_candles").removeClass("active");
		} else {
				povoleni_k_pridavani_novych_svicek = true;
				$("#button_toggle_candles").addClass("active");
		}
}