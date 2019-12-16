$(document).ready(function () {
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?id=185631422@N05&format=json&jsoncallback=?";
    $.getJSON(url, function(data) {
        var html = "";
        $.each(data.items, function (i, item) {
            html += "<img src=\"" + item.media.m + "\">";
        });
        $(".bioPhoto").html(html);
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