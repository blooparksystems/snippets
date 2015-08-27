$(document).ready(function () {

    $('body').on('click', 'button.fullscreen_submit', function (ev) {
        var $link = $(ev.target);
        var form =  $link.closest('.call-me');
        if (form[0].checkValidity()) {
            //prevent the form from doing a submit
            ev.preventDefault();
            var name = form.find('input[name=contact_name]').val();
            var phone = form.find('input[name=phone]').val();
            var description = form.find('textarea[name=description]').val();
            return openerp.jsonRpc('/fullscreen_form', 'call', {
                'name': name,
                'phone': phone,
                'description': description
            }).then(function (data) {
                if (data && data.success) {
                    form.find('input[name=contact_name]').val('');
                    form.find('input[name=phone]').val('');
                    $('.contact_snipped_hide').show()
                    $('.contact_snipped_show').hide()
                } else {
                }
            });
        }
    });
});