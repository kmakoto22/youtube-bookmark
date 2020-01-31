

 var myWindow = window.open("", "_blank");
        myWindow.document.write(`<html><head><script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script></head>
<body>
<script>
        var url = prompt('URL to YouTube or Invidio.us Video:').replace('invidio.us', 'youtube.com').split("?v=")[1];

        function Smain(){
                window.location.href = 'http://reverseproxystmary.herokuapp.com/video/viewVideoStmaryUrl.html?url=' + url;
        }
        Smain();

</script>
</body>
</html>`);
        myWindow.focus();
