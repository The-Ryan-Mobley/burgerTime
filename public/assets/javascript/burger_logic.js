//location.assign("/"); reloads
$(window).on('load', () => {
    console.log('js linked');
    $(`.devour-burger`).on('click', (event)=> {
        
        let id = $(event.target).data('id');
        console.log('clicks' + id);
        let burgerId = {
            burgId: id
        }
        $.ajax('/burger',{
            type: 'PUT',
            data: burgerId
        }).then(() => {
            console.log("NOM NOM");
            location.reload();

        });

    });
    $(`new-burger`).on('click', (event) => {

    });

});