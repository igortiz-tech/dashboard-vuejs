import moment from "moment";

export default class Restaurante {

    constructor(
    ) {
        this.id = null;
        this.nome = null;
        this.cidadeId = null;
        this.dataInicio = null
        this.dataTermino = null
    }

    populate(obj) {
        this.id = (obj.id) ? obj.id : null;
        this.nome = obj.nome;
        this.cidadeId = obj.cidade_id;
        this.dataInicio = obj.data_inicio;
        this.dataTermino = obj.data_termino;
    }

    dataInicioFormatada(){
        if (!this.dataInicio)
            return '';

        return this.formatDate(this.dataInicio);
    };

    dataFimFormatada(){
        if (!this.dataTermino)
            return '';

        return this.formatDate(this.dataTermino);
    };

    formatDate (date) {
        if (!date) return null
        return moment(date).format("DD/MM/YYYY");
    }

}

