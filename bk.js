

 var myWindow = window.open("", "_blank");
        myWindow.document.write(`<html><head><script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script></head>
<body>
<script>
        var url = prompt('URL to YT Video');

function Sget(t,e){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&&200==this.status&&e(this.responseText)},n.open("GET",t,!0),n.send()}function Smain(){var t="https://reverseproxystmary.herokuapp.com/";Sget(t+"download?URL=" + url,function(e){Sget(t+"subtits?URL=" + url,function(t){

setTimeout(function () {
$('<video crossorigin="anonymous" style="width: 100vw; height: 100vh;" preload="auto" controls><source crossorigin="anonymous" src="' + e + '" type="video/webm"><track crossorigin="anonymous" src="' + t + '" kind="captions" srclang="en" label="English"></video>').appendTo('body');
}, 1000);

})})}

Smain();

</script>
</body>
</html>`);
        myWindow.focus();
