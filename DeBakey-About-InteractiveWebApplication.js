$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=05c6316ed081154924c3510fdbef4a46&photoset_id=72157712462890488&extras=original_format&format=json&nojsoncallback=1",
        beforeSend: function() {
            $(".bioPhoto").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data.photoset.photo, function(i, value) {
                html += "<img src='https://live.staticflickr.com/" + value.server + "/" + value.id + "_" + value.originalsecret + "_c." + value.originalformat + "'>";
            });
            $(".bioPhoto").html(html);
        }
    });

    $.ajax({
        type: "get",
        url: "bioLinks.json",
        beforeSend: function() {
            $("#socialMedia").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            var html = '';
            $.each(data, function() {
                $.each(this, function(key, value) {
                    html += "<a href=\"" + value.link + "\">" + value.title + "</a>";
                });
            });
            $("#socialMedia").html(html);
            $("#socialMedia").css("width", "100%");
            $("#socialMedia").css("margin-top", "15px");
            $("#socialMedia").css("margin-right", "15px");
            $("#socialMedia").css("text-align", "center");
            $("#socialMedia").css("padding", "15px");
            $("#socialMedia a").css("margin-top", "15px");
            $("#socialMedia a").css("margin-right", "5px");
            $("#socialMedia a").css("padding-left", "5px");
            $("#socialMedia a").css("padding-right", "5px");
            $("#socialMedia a").css("padding-top", "5px");
            $("#socialMedia a").css("padding-bottom", "5px");
            $("#socialMedia a").css("background-color", "white");
            $("#socialMedia a").css("color", "black");
            $("#socialMedia a").css("font-size", "12px");
            $("#socialMedia a").css("text-transform", "capitalize");
            $("#socialMedia a").css("border-radius", "5px");
            $("#socialMedia a").css("cursor", "pointer");
            $("#socialMedia a").css("font-family", "\'Quicksand\'\, sans-serif");
            $("#socialMedia a").css("transition", "0.4s");
        }
    });
});