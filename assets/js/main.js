var urlParams = new URLSearchParams(window.location.search);
var wallet = urlParams.get('wallet') || '0xd72625cca6d607b8fa5106552c2f08690b3c4356';

jQuery(function($){
    $('.js-wallet-reference').each(function(){
        $(this).text( wallet.substring( wallet.length - 6 ) );
    });

    $('.js-show-sms-details').on('click', function(){
        $('.peepl-topup').addClass('peepl-topup--sms');
        setTimeout(function(){
            $('#tel').focus();
        }, 100);
    });

    $('.js-hide-sms-details').on('click', function(){
        $('.peepl-topup').removeClass('peepl-topup--sms');
    })
});
