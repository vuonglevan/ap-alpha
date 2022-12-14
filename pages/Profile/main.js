function setContent() {
    const currentContent = $(this).attr('data-target');
    $('.js-btn').removeClass('active');
    $(this).addClass('active');
    $('.row').addClass('d-none');
    $(currentContent).removeClass('d-none');
}

$(document).ready(function () {
    $(document).on('click', '.js-btn', setContent);
});