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
    $('#submit-burger').on('click',(event)=>{
        let newBurg = grabToppings();
        let burgerObj = {name: newBurg};
        $.ajax('/burger',{
            type: 'POST',
            data: burgerObj
        }).then(()=>{
            window.location.href='/';

        });
        //take values from form and make butger string
    });
    $('#go-back').on('click',(event)=>{
        window.location.href='/';

    });
    function makeToppings(topID){
        if(topID < 6){ //5 is enough
            topID++;
            let toppingString=`<select class="u-full-width ingredient slider" id="topping-${topID}">`;
            toppingString+=`<option value="Pickle">Pickles</option>`;
            toppingString+=`<option value="Onion">Onions</option>`;
            toppingString+=`<option value="Red Onion">Red Onions</option>`;
            toppingString+=`<option value="Pepper">Peppers</option>`;
            toppingString+=`<option value="Mushroom">Mushrooms</option>`
            toppingString+=`<option value="Avocado">Avocado</option>`;
            toppingString+=`</select>`;
            $(toppingString).appendTo('#topping-list');
            $(`#more-toppings`).data('topcount',topID);
           }
           else{
               let errorText=$('<p class="err">Max topping reached!(5)</p>');
               errorText.appendTo('#topping-list');
           }
    }
    function grabToppings(){
        let toppings = $('.ingredient :selected').map(function() {
            return this.value;
        }).get();

        let mainBurger = $('.the-meats :selected').map(function(){
            return this.value;
        }).get();

        let newBurgerName = toppings.join(" ") + " " + mainBurger.join(" ");
        return newBurgerName;
    }

});