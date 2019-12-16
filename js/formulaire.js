/*var $form_chapitre = $('#form_chapitre');
var $form_souschapitre = $('#form_souschapitre');


var $token =  $('#form_token');

$form_chapitre.change(function()
    {
        var $form = $(this).closest('form');

        var data = {};

        data[$token.attr('name')] = $token.val();
        data[$form_chapitre.attr('name')] = $form_chapitre.val();

        $form_souschapitre.val( $form_chapitre.val());
        log("1");

        $.post($form.attr('action'),data).then(function(response)
        {

            log("2  --->");
            log($form_chapitre.val());
            $('#form_souschapitre').replaceWith(
                $(response).find("#form_souschapitre")

            );


           // log($(response).find("#form_souschapitre"));
        });
    }


);


log("salut toi");
function log($msg)
{
console.log($msg);

}*/