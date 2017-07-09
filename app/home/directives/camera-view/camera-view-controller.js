function cameraViewController() {
    var feed = document.getElementById('feed');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({video: true}).then(function(stream) {
            feed.src = window.URL.createObjectURL(stream);
            feed.play();
        });
    } else if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia({video: true}, function(stream) {
            feed.src = stream;
            feed.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia({video: true}, function(stream) {
            feed.src = window.webkitURL.createObjectURL(stream);
            feed.play();
        }, errBack);
    } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia({video: true}, function(stream) {
            feed.src = window.URL.createObjectURL(stream);
            feed.play();
        }, errBack);
    }

    function errBack() {
    }

    document.getElementById('snap').addEventListener('click', function() {
        context.drawImage(feed, 0, 0, 640, 480);
    });
}

export default cameraViewController;
