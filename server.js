/*
****************************************************pathing guide*****************************************************
        orm------------.
(holds sql quieries)    \
                    burger.js---------.
                (takes data and appl-) \
                (-ies orm functgions )  *----burger_controller----------.
                                        (handles routing and handlebars) \
                                        /                                 *---server(you are here)
    handlebar templates----------------*                                   (host server and calls controller)
**********************************************************************************************************************
*/

const express = require('express');
const handlebar = require('express-handlebars');
const controls = require('./models/burger.js');


const app = express();
const PORT = process.env.PORT || 1337;

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebar({ defaultLayout: "main" })); //set up handlebars
app.set("view engine", "handlebars");


require('./controllers/burgers_controller.js')(app);




// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });
  