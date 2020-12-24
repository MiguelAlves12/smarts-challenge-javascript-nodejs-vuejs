const express = require('express');
const routes = express.Router();
const axios = require('axios');

function paginacao(page=1,clients){
    let listClients = [];
    let limit = 10;
    if(page > 1){
        clients = clients.slice((page * limit)-10,(page * limit));
    }
    for(let i = 0;i < limit;i++){
        if(clients[i] == undefined) break;
        listClients.push(clients[i]);
    }
    return listClients;
}

routes.get('/Custumers', async (request,response) =>{
    const {data: clients} = await axios.get('https://smarts-totem.s3-sa-east-1.amazonaws.com/code-challenge/customers.json');

    const { page = 1 } = request.query;

    const listClients = paginacao(page, clients);
    
    response.status(200).json({
        clients: listClients
    })
})

module.exports = routes;