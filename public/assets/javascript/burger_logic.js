//location.assign("/"); reloads
$(window).on('load', () => {
    console.log('js linked');
    $(`.devour-burger`).on('click', (event)=> {
        
        let id = $(event.target).data('id');
        
        let state = $(event.target).data('state');
        console.log('clicks' + id + "and"+ state);
        let burgerId = {
            burgId: id,
            burgState: state
        }
        $.ajax('/burger',{
            type: 'PUT',
            data: burgerId
        }).then(() => {
            console.log("NOM NOM");
            location.reload();

        });

    });
    $(`#new-burger`).on('click', (event) => {
        location.reload();
        window.location.href='/newBurger';


    });
    $('#more-toppings').on('click',function(event){ //this code is janky but it works
                                                    //es5 function so i can use this because the syntax of calling itself
        let topID = $(this).data('topcount');       //looked wierd. the top ID gets incremented in makeToppings() so the 
        console.log(topID);                         //selects can be read with .map during collection

       makeToppings(topID);
       
    });
    $('#submit-burger').on('submit',(event)=>{
        event.preventDefault();
        //take values from form and make butger string
    });
    $('#go-back').on('click',(event)=>{
        window.location.href='/';

    });
    function makeToppings(topID){
        if(topID < 6){ //5 is enough
            topID++;
            let toppingString=`<select class="u-full-width ingredient slider" id="topping-${topID}">`;
            toppingString+=`<option value="Option 1">Pickles</option>`;
            toppingString+=`<option value="Option 2">Onions</option>`;
            toppingString+=`<option value="Option 3">Red Onions</option>`;
            toppingString+=`<option value="Option 4">Peppers</option>`;
            toppingString+=`<option value="Option 5">Mushrooms</option>`
            toppingString+=`<option value="Option 6">Avocado</option>`;
            toppingString+=`</select>`;
            $(toppingString).appendTo('#topping-list');
            $(`#more-toppings`).data('topcount',topID);
           }
           else{
               let errorText=$('<p class="err">Max topping reached!(5)</p>');
               errorText.appendTo('#topping-list');
           }
    }

});