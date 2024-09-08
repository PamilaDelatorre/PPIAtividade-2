import Evento from "./Modelo/Evento.js" 

//criando Evento 1
const evento1 = new Evento(1, "Maringa Folia", "A maior micareta do Sul do Brasi", "2024-12-01", "2024-12-02", 100.00, 200.00, 300.00, 4.5);
//criando Evento 2
const evento2 = new Evento(2, "Expo Prudente Teste", "O maior Rodeio do Oeste Paulista", "2024-12-05", "2024-12-06", 120.00, 250.00, 350.00, 4.8);

// Sequência de operações
adicionarEvento(evento1)
    .then(() => {
        console.log("Evento 1 incluído com sucesso!");
        return adicionarEvento(evento2);
    })
    .then(() => {
        console.log("Evento 2 incluído com sucesso!");
        return consultarEventos(evento1);
    })
    .then((listaEventos) => {
        console.log("Listando eventos:");
        for (let evento of listaEventos) {
            console.log(evento.toString());
        }
        return excluirEvento(evento1);
    })
    .then(() => {
        console.log("Evento 1 excluído com sucesso.");
        evento2.nome = "Expo Prudente";
        return alterarEvento(evento2);
    })
    .then(() => {
        console.log("Evento 2 alterado com sucesso.");
        return evento2.consultar("Expo Prudente");
    })
    .then((listaEventos) => {
        console.log("Consultando eventos após alteração:");
        for (let evento of listaEventos) {
            console.log(evento.toString());
        }
    })
    .catch((erro) => {
        console.log("Erro: " + erro);
    });

    function adicionarEvento(evento) {
        return evento.incluir();
    }
    
    function consultarEventos(evento) {
        return evento.consultar();
    }
    
    function excluirEvento(evento) {
        return evento.excluir();
    }
    
    function alterarEvento(evento) {
        return evento.alterar();
    }



