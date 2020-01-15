(function() {
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        $('body').html(" ");
        $('head').html(" ");

        var rp = 'https://reverseproxystmary.herokuapp.com/';

        var video = $.get(rp + 'download/?URL=' + window.location.href.replace('invidio.us', 'youtube.com'), function (res, status) {
                return res;
        });
        var subtitle = $.get(rp + 'subtitle/?URL=' + window.location.href.replace('invidio.us', 'youtube.com'), function (res, status) {
                return res;
        });
alert(video);
        $('<video crossorigin="anonymous" style="width: 100vw; height: 100vh;" preload="auto" controls><source crossorigin="anonymous" src="' + video + '" type="video/webm"><track crossorigin="anonymous" src="' + video + '" kind="captions" srclang="en" label="English"></video>').appendTo('body');
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();
