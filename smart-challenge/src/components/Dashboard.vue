<template>
    <div class="container-dashboard">
        <h1>Smarts Dashboard</h1>
        <div class="search">
            <strong>Buscar:</strong><input v-model="text" v-on:keyup.enter="search" type="text">
        </div>
        <div class="container-menu">
            <nav>
                <a v-on:click="smallestBudget">Menor Budge</a>
                <a v-on:click="biggestBudget">Maior Budge</a>
                <a v-on:click="ascendingOrder">A-Z</a>
                <a v-on:click="descendingOrder">Z-A</a>
                
            </nav>
            <div class="container-calendar">
                <input v-model="startDate" @change="searchDate" type="date" name="start-date" id="start-date"/>
                <input v-model="finalDate" @change="searchDate" type="date" name="final-date" id="final-date"/>
            </div>
        </div>
        <div class="container-clients">
            <input type="number" id="filter-items" v-model="quantatyItems" @change="filterClientsItems" min="0" max="10">
            <div class="list-clients">
                <Client
                v-for="(client,index) in clients"
                :key="client.id"
                :imagens="client.pictures"
                :nome="client.name.first+' '+client.name.last"
                :email="client.email"
                :endereco="client.address"
                :idade="client.age"
                :budget="client.budget"
                :telefone="client.phone"
                :companhia="client.company"
                :cordenadas="[parseFloat(client.latitude),parseFloat(client.longitude)]"
                :contatosTimeline="client.contactTimeline"
                :id="'client-'+ index"
                :reference="'client-'+ index">
                </Client>
                
            </div>
            <p class="pagina"><strong>Pagina:</strong> {{pagina}}</p>
            <button v-on:click="nextOrPrevious" class="btn-next">Próximo</button>
            <button v-on:click="nextOrPrevious" class="btn-previous">Anterior</button>
            
        </div>
        
    </div>
</template>

<script>
import Client from './Client';
import api from '../services/api.js'

export default {
    name: "Dashboard",
    components: {
        Client
    },
    data () {
        return{
            clients: null,
            temporaryClients: [],
            pagina: 1,
            quantatyItems: 10,
            text: "",
            startDate: "",
            finalDate: ""
        }
    },
    methods: {
        nextOrPrevious: function (event){
            let btnPrevious = document.querySelector(`.btn-previous`);
            this.temporaryClients = 10;
            if(this.pagina == 1){
                this.pagina = 1;
                btnPrevious.disabled = true;
            }
            
            if(event.target.className == "btn-next"){
                this.pagina += 1;
                btnPrevious.disabled = false;
            }else{
                this.pagina -= 1;
            }

            api.get(`/Custumers?page=${this.pagina}`)
            .then(response => {
                if(response["data"].clients == 0){
                    this.pagina -= 1;
                    alert("Não há mais clientes");
                }else{
                    this.clients = response["data"].clients
                    this.temporaryClients = [];
                    this.quantatyItems = this.clients.length;
                }
            })
            .catch(err => console.log(err));
        },
        smallestBudget: function(){
            if(this.temporaryClients.length != 0) { 
                this.clients = this.temporaryClients 
            }

            this.temporaryClients = this.clients;
            let smallestBudget = this.clients[0];
            for(let client of this.clients){  
                let budget = smallestBudget.budget.replace("$",'').replace(/,/g,'');
                if(client.budget.replace("$",'').replace(/,/g,'') <= budget){
                    smallestBudget = client;
                }    
            }
           this.clients = null;
           this.clients = [smallestBudget];
        },
        biggestBudget: function(){
            if(this.temporaryClients.length != 0) { 
                this.clients = this.temporaryClients 
            }

            this.temporaryClients = this.clients;
            let smallestBudget = this.clients[0];
            for(let client of this.clients){  
                let budget = smallestBudget.budget.replace("$",'').replace(/,/g,'');
                if(client.budget.replace("$",'').replace(/,/g,'') >= budget){
                    smallestBudget = client;
                }    
            }
           this.clients = null;
           this.clients = [smallestBudget];
        },
        ascendingOrder: function(){
            this.clients.sort(function(a,b){
                if(a.name.first > b.name.first){
                    return 1;
                }if(a.name.first < b.name.first){
                    return -1;
                }
                return 0;
            });
        },
        descendingOrder: function(){
            this.clients.sort(function(a,b){
                if(a.name.first < b.name.first){
                    return 1;
                }if(a.name.first > b.name.first){
                    return -1;
                }
                return 0;
            });
        },
        search: function(){
            if(this.temporaryClients.length != 0) { 
                this.clients = this.temporaryClients 
            }
            this.temporaryClients = this.clients;
            this.clients = null;
            let listName = this.temporaryClients.filter(client =>{
                let nome = client.name.first.toLowerCase();
                let found = nome.indexOf(this.text.toLowerCase());
                return found != -1; 
            });
            let listAge = this.temporaryClients.filter(client => client.age.toString() == this.text);
            let listEmail = this.temporaryClients.filter(client => {
                let email = client.email.toLowerCase();
                let found = email.indexOf(this.text.toLowerCase());
                return found != -1;
            });
            let listBudget = this.temporaryClients.filter(client => {
                let budget = client.budget;
                let found = budget.indexOf(this.text);
                return found != -1;
            });
            if(listName.length > 0){
                this.clients = listName;
            }else if(listAge.length > 0){
                this.clients = listAge;
            }else if(listEmail.length > 0){
                this.clients = listEmail;
            }else{
                this.clients = listBudget;
            }
            this.quantatyItems = this.clients.length; 
           
        },
        searchDate: function(){
            if(this.temporaryClients.length != 0) { 
                this.clients = this.temporaryClients 
            }
            this.temporaryClients = this.clients;
            this.clients = null;
            let dateStart = new Date(this.startDate+" 00:00:00");
            let dateFinal = new Date(this.finalDate+" 23:59:59");
            //console.log(dateStart+" "+dateFinal)
            let listDate = this.temporaryClients.filter(client =>{
                let dateClient = new Date(client.registered)
                console.log(dateClient);
                return (dateClient >= dateStart) && (dateClient <= dateFinal);
            });
            this.clients = listDate;
            this.quantatyItems = this.clients.length;
        },
        filterClientsItems: function(){
            if(this.temporaryClients.length != 0) { 
                this.clients = this.temporaryClients 
            }
            this.temporaryClients = this.clients;
            this.clients = [];
            let cont = 0;
            while(cont < this.quantatyItems){
                this.clients.push(this.temporaryClients[cont]);
                cont++;
            }
        }
    },
    mounted(){
        api.get("/Custumers").then(response => {
            this.clients = response["data"].clients;
            this.quantatyItems = this.clients.length;

        }).catch(err => console.log(err));
    }
}
</script>

<style scoped>
    h1 {
    font-family: Helvetica;
    color: #FFF;
    font-size: 40px;
    width: 360px;
    margin-left: 500px;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    }
    .container-dashboard {
        width: 100%;
        height: 1000px;
        background-color: #572998;
    }
    .container-clients{
        width: auto;
        height: 700px;
        background-color: rgb(235, 233, 233);
        border: 2px solid black;
        border-radius: 10px;
        padding-top: 30px;
        padding-right: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        direction: rtl;
    }
    .container-clients input{
        float: right;
        width: 50px;
        height: 25px;
        margin-top: -20px;
        font-size: 20px;
        text-align: center ;
        direction: ltr;
    }
    .container-clients button{
        width: 130px;
        height: 30px;
        font-size: 18px;
        color:rgb(51, 46, 46);
        border:none;
        box-shadow: 1px 2px 3px black;
        border-radius: 10px;
        cursor: pointer;
        background-color: #0bc40b;
    }
    .container-clients button:hover{
        background-color: #2fa822;
        color:yellow;
    }
    .btn-previous{
        margin-left: 460px;
    }
    .btn-next{
        margin-left: 20px;
    }
    .list-clients{
        padding: 0px;
        overflow-y: auto;
        margin-bottom: 10px;
        width:auto;
        height: 650px;
    }

    nav {
        display: block;
    }
    nav a {
        cursor: pointer;
        box-shadow: 2px 2px 3px rgb(36, 35, 36);
        font-size: 25px;
        text-decoration: none;
        color: black;
        border: black 2px solid;
        padding: 1px 25px;
        background-color: white;
    }

    .search{
        margin-top: -63px;
        margin-right:10px;
        width: 300px;
        height: px;
        float:right;
    }
    .search input{
        margin-left: 10px;
        width:200px;
        font-size: 20px;
    }
    .search strong{
        font-size: 20px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: rgb(17, 16, 17);

    }

    nav a:hover{
        background-color: cornflowerblue;
    }

    .container-calendar{
        padding-top: 20px;
    }
    .container-calendar input{
        font-size: 20px;
        border:black 2px solid;
        box-shadow: 2px 2px 4px rgb(36, 35, 36);
    }
    .container-calendar #final-date{
        margin-left: 90px;
    }
    .pagina{
        display: inline;
        margin-left: 430px;
        font-size: 23px;
        font-family: Georgia, 'Times New Roman', Times, serif;
        color: rgb(17, 16, 17);
    }
</style>