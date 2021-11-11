
var ws_killed = false;
var ws_socket;


function ws_init()
{
  ws_killed = false;

  ws_socket = new WebSocket('wss://ws-cstor.efik.cz');

  // Connection opened
  ws_socket.addEventListener('open', function (event) {
    ws_send_parms();
  });

  // Listen for messages
  ws_socket.addEventListener('message', function (event) {
    let server_response = JSON.parse(event.data);
    //console.log(server_response);

    if (server_response.t !== undefined) { // 't'
      //jen pokud zrovna neprobíhá načítání starších dat
      if (!dataDoGrafu_locked && povoleni_k_pridavani_novych_svicek) {
        //přidáme novou svíčku
        updateLastBar(server_response);
      }
    } else if (server_response.new_ts !== undefined) {
      new_ts(server_response.new_ts);
    } else if (server_response.new_parms !== undefined) {
      //jiné páry a timeframe
      $('.timeframe_button').removeClass("active");
      $('#timeframe_' + server_response.new_parms.tf).addClass("active");
      $("#pairs").val(server_response.new_parms.pair);
      active_timeline_button = server_response.new_parms.tf;
      active_timeframe_krok = parseInt(active_timeframe_krok = $('#timeframe_' + server_response.new_parms.tf).attr('data-krok'));
      pripravitDataProGraf('4-ws');
    } else if (server_response.pos_buttons !== undefined) {
      //pos_buttons
      $("#pos_buttons").html('');
      $.each( server_response.pos_buttons, function( key, val ) {
        $("#pos_buttons").append("<a href='#' class='button' onclick='new_ts("+ val.t +"); return false;'>"+ val.text +"</a>");
      });
    } else if (server_response.cl_dots !== undefined) {
      //cl_dots = smaže všechny vrstvy grafu
      releaseSeries();
    } else if (server_response.dots !== undefined) {
      //draw dots
      drawDots(server_response.dots);
    } else if (server_response.lines !== undefined) {
      //draw usecka
      $.each( server_response.lines, function( key, val ) {
        drawUsecka(val.A, val.B, val.c);
      });
    } else if (server_response.curve !== undefined) {
      //draw krivka
      drawKrivka(server_response.curve);
    } else if (server_response.action !== undefined && server_response.action == "restart") {
      //nové načtení grafu
      pripravitDataProGraf();
    }
    else {
      alert("Neznámé ws: "+ event.data);
    }
  });
}

function ws_send_parms() {
  ws_socket.send('{"action": "parms", "pair": "'+ $('#pairs').val() +'", "tf": "'+ active_timeline_button +'", "ts": '+ data_pro_graf[data_pro_graf.length - 1].time +', "n": '+ (data_pro_graf.length - 1) +', "mode": "'+ (test_mode? 't':'r') + '"}');
}

function ws_send_click(event) {
  ws_socket.send('{"action": "click", "ctime": '+ event.time +', "x": '+ event.point.x +', "y": '+ event.point.y +', "w": '+ $("#graf").width() +', "h": '+ $("#graf").height() +'}');
}

function ws_send_dots() {
  // !!! limitace na prostrednich 20k zaznamu (podle polohy krize)
  ws_socket.send('{"action": "graf_rozmezi", "ts": '+ data_pro_graf[0].time +', "te": '+ data_pro_graf[data_pro_graf.length-1].time +', "n": '+ data_pro_graf.length +'}');
}

function ws_close() {
  ws_killed = true;
  ws_socket.close();
}
