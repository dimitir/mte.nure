

function looking_for_title_class() {
    var page_name = $("title").attr("class");
    return page_name;
}

function set_menu_element(page_name_value) {
    var value='#' + page_name_value;
    $(value).css("color", "red");
    //  $(value).css("color", "#FFCA05");
}



$(function () {
    var page_name = looking_for_title_class();
    set_menu_element(page_name);
});





