function setContent() {
    const currentContent = $(this).attr('data-target');
    const parent = $(this).parent();
    $('.row').removeClass('active');
    $('.row').addClass('d-none');
    parent.addClass('active');
    $(currentContent).removeClass('d-none');
}

$(document).ready(function () {
    $(document).on('click', '.js-btn', setContent);
});