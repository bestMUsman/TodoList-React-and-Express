
$(document).ready(function() {
    $("ul").sortable();
    $('.button').click(function() {
        var x = document.getElementById("thing");
        var a = x.value.replace(/\s/g, '');
        if (a === "") {
            x.value = "";
        } else {

            var toAdd = $("input[name=checkListItem]").val();
            $(".todo-list").prepend('<li class="item" draggable="true" ondragstart="drag(event)" id="drag4">' + toAdd + '<div class="signc"><div class="signcc">\u00D7</div></div>' + '</li>');
            x.value = "";
        }

    });

    $(document).on('click', '.signc', function() {
        $(this).parent().fadeOut('fast', function() {
            $(this).remove();
        });
    });

    $(document).on('click', '.item', function() {
        $(this).toggleClass("linet");
    });

});