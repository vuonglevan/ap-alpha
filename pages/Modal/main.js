function showModal() {
    $('.js-modal').addClass('active');
}

function hiddenModal() {
    $('.js-modal').removeClass('active');
}


$(document).ready(function () {
    $(document).on('click', '.js-btn-show', showModal);
    $(document).on('click', '.js-btn-x', hiddenModal);
});