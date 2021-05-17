// Line through when clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Clicking to delete
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});


$("input[type='text").keypress(function(event){
    if (event.which === 13) {
        // Getting a new to do from the li
        var todoText = $(this).val();
        $(this).val("");
        // Adding that grabbed string from the input and 
        // create an li inside the ul
        $("ul").append("<li> <span><i class='fa fa-trash' aria-hidden='true'></i> </span>" + todoText + "</li>");
    }
})

$(".fa-plus").click(function(){
    $("input[type='text").fadeToggle(1000);
});
