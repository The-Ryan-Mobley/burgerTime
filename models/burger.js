/*
****************************************************pathing guide*****************************************************
        orm------------.
(holds sql quieries)    \
                    burger.js---------.(you are here)
                (takes data and appl-) \
                (-ies orm functgions )  *----burger_controller----------.
                                        (handles routing and handlebars) \
                                                                          *---server
                                                                          (host server and calls controller)
**********************************************************************************************************************
*/
const orm = require('../config/orm.js');
//call orm functions