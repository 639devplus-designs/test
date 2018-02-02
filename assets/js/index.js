$('[data-toggle="buttons"] .btn').on('click', function () {
    // toggle style
    $(this).toggleClass('btn-success btn-danger active');

    // toggle checkbox
    var $chk = $(this).find('[type=checkbox]');
    $chk.prop('checked', !$chk.prop('checked'));

    return false;
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})