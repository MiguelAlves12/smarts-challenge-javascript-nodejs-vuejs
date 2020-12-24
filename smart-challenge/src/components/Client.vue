<template>
    <div v-on:click="totalInfoClient" class='client'>
        <div :id="reference+'-view-client'" v-if="viewClient" v-bind:style="styleViewClient" class="view-client">
            <div :id="reference+'-view-imagem'" class="view-client-imagem">
                <img :id="reference+'-img1'" 
                v-for="(imagem, index) of imagens" 
                v-bind:key="imagem[index]" 
                v-bind:src="imagem.url">
            </div>
            <div :id="reference+'-view'" class="view-info-client">
                <p :id="reference+'-nome'"><strong>Nome:</strong> {{nome}}</p>
                <p :id="reference+'-idade'"><strong>Idade:</strong> {{idade}}</p>
                <p :id="reference+'-tel'"><strong>Telefone:</strong> {{telefone}}</p>
                <p :id="reference+'-email'"><strong>Email:</strong> {{email}}</p>
                <p :id="reference+'-endereco'"><strong>Endereço:</strong> {{endereco}}</p>
                <p :id="reference+'-companhia'"><strong>Companhia:</strong> {{companhia}}</p>
                <p :id="reference+'-budget'"><strong>Budge:</strong> {{budget}}</p>
                <p :id="reference+'-contatos'"><strong>Contatos:</strong>
                    <ul>
                        <li v-for="contato in contatosTimeline" :key="contato.id" style="">{{contato.broker}}</li>
                    </ul>
                </p>
                
            </div>
            <div class="map" :id="reference+'-map'">
                <p :id="reference+'-lat-long'"><strong>Latitude:</strong> {{cordenadas[0]}} <strong>Longitude:</strong> {{cordenadas[1]}}</p>
                <Map v-bind:centerMap="cordenadas" v-bind:markerLatLngMap="cordenadas"/>
            </div>
        </div>
        <div v-else>
            <div class="imagem" :id="reference+'-imagem'">
                <img :id="reference+'-img2'" v-bind:src="imagens[0].url">
            </div>
            <div :id="reference+'-info-client'" class="info-client">
                <p :id="reference+'-p1-info'" >Nome: {{nome}}</p>
                <p :id="reference+'-p2'" >Email: {{email}}</p>
                <p :id="reference+'-p3'" >Idade: {{idade}}</p>
                <p :id="reference+'-p4'" >Budget: {{budget}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
    import Map from "./Map"

    export default {
        name: "Client",
        components:{
            Map
        },
        props:{
            imagens: Array,
            nome: String,
            email: String,
            endereco: String,
            idade: Number,
            budget: String,
            telefone: String,
            companhia: String,
            cordenadas: Array,
            contatosTimeline: Array, 
            reference: String
        },
        data(){
            return{
                viewClient: false,
                styleViewClient: {}
            }
        },
        methods:{
            totalInfoClient:function(event){
                console.log(event.target.id.substring(0,8));
                let clientChosen = document.getElementById(event.target.id.substring(0,8));
                console.log(clientChosen)
                if(clientChosen != undefined){
                    if(this.viewClient == false){
                        clientChosen.style.height = "490px";
                        this.viewClient = true;
                        this.styleViewClient = {
                            width: "auto",
                            height: "490px"
                        }
                    }else{
                        clientChosen.style.height = "190px";
                        this.viewClient = false;
                        this.styleViewClient = {}
                    }
                }     
            }
        }         
    }
</script>

<style scoped>
    .client{
        display:block;
        padding:3px;
        border:2px solid #2b3a4a;
        background-color: gray;
        width: auto;
        height: 190px;
        margin-bottom: 10px;
        margin-right: 6%;
        margin-left: 10px;
        direction: ltr;
        cursor: pointer;
    }
    .imagem{
        margin-top: 10px;
        width: 30%;
        height: 100px;
        float:left;
    }
    .imagem img{
        border:2px solid #2b3a4a;
        width: 170px;
        height: 170px;
        border-radius: 100%;
        margin-right: 0%;
        box-shadow: 1px 2px 5px black;
    }
    .info-client{
        margin-top: 10px;
        float: right;
        width: 60%;
        height: 100px;
    }
    .info-client p{
        text-align: left;
        font-weight: bold;
    }
    .view-client{
        margin-top: -3px;
        margin-left: -3px;
        margin-right: -3px;
    }
    .view-client img{
        border:2px solid #2b3a4a;
        width: 80px;
        height: 80px;
        border-radius: 100%;
        margin-right: 20px;
        box-shadow: 1px 2px 5px black;
    }
    .view-client-imagem{
        width: 100%;
        background-color: #5fc934;
        box-shadow: 1px 2px 3px black ;
    }
    .view-client-imagem :first-child{
        margin-left: 40px;
    }
    .view-info-client{
        padding-left: 10px;
        margin-top: 5px;
        margin-left:5px;
        background-color: rgb(255, 255, 255);
        border: 2px solid black;
        width: 29.8%;
        height: 396px;
        border-radius: 10px;
        float:left;
    }
    .view-info-client p{
        text-align: left;
    }
    .map p{
        padding-top: 10px;
        border: 2px solid black;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        width: 400px;
        height: 30px;
        margin-left:200px;
        float:left;
    }
</style>