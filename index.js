import Evento from "./Modelo/Evento.js" //nunca se esqueça da extensão .js

function adicionarEvento(evento) {
    evento.incluir().then(() =>{
        console.log("Evento incluído com sucesso!");
    }).catch((erro) =>{
        console.log("Erro ao incluir o evento: " +  erro);
    });
}

//criando Evento 1
const evento1 = new Evento(1, "Maringa Folia", "A maior micareta do Sul do Brasi", "2024-12-01", "2024-12-02", 100.00, 200.00, 300.00, 4.5);
adicionarEvento(evento1);

//criando Evento 2
const evento2 = new Evento(2, "Expo Prudente Teste", "O maior Rodeio do Oeste Paulista", "2024-12-05", "2024-12-06", 120.00, 250.00, 350.00, 4.8);
adicionarEvento(evento2);

//listando todos os eventos criados
evento2.consultar().then((listaEventos) => {
    for (let evento of listaEventos){
        console.log(evento.toString());
    }
}).catch((erro) =>{
    console.log("Erro ao consultar os eventos: " + erro);
});

//excluindo evento 1
evento1.excluir();

//alterando nome do evento 2
evento2.nome = "Expo Prudente";
evento2.alterar();

//consultando evento 2
evento2.consultar("Expo Prudente").then((listaEventos) => {
    for (const evento of listaEventos){
        console.log(evento.toString());
    }
}).catch((erro) =>{
    console.log("Erro ao consultar os eventos: " + erro);
});



