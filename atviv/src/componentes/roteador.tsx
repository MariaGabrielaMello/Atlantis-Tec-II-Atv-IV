// Em Roteador.tsx

import React, { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import CadastrarCliente from "./cadastrarCliente";
import ListaCliente from "./listaClientes";
import CadastrarDependente from "./cadastrarDependente";
import CadastrarHospedagem from "./cadastrarHospedagem";
import Home from "./Home";
import ListaDependente from "./listaDependente";
import ListaHospedagem from "./listaHospedagem";
import ListaAcomodacoes from "./listaAcomodacoes";
import CadastrarAcomodacao from "./cadastrarAcomodacao";

type State = {
    tela: string;
};

export default class Roteador extends Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            tela: 'Home'
        };
        this.selecionarView = this.selecionarView.bind(this);
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault();
        console.log(novaTela);
        this.setState({
            tela: novaTela
        });
    }

    render() {
        return (
            <>
                <BarraNavegacao
                    seletorView={this.selecionarView}
                    tema="#e3f2fd"
                    botoes={['Home', 'Clientes', 'Dependentes', 'Hospedagens', 'Acomodações', 'Cadastrar Cliente', 'Cadastrar Dependente', 'Cadastrar Hospedagem', 'Cadastrar Acomodação']} corTexto={"white"} corBotao={""}                />
                {this.renderizarComponente()}
            </>
        );
    }

    renderizarComponente() {
        const { tela } = this.state;
        switch (tela) {
            case 'Clientes':
                return <ListaCliente tema={""} />;
            case 'Cadastrar Cliente':
                return <CadastrarCliente tema={""} />;
            case 'Dependentes':
                return <ListaDependente tema={""} />;
            case 'Hospedagens':
                return <ListaHospedagem tema={""} />;
            case 'Cadastrar Dependente':
                return <CadastrarDependente tema={""} />;
            case 'Cadastrar Hospedagem':
                return <CadastrarHospedagem tema={""} />;
            case 'Cadastrar Acomodação':
                return <CadastrarAcomodacao tema={""} />;
            case 'Acomodações':
                return <ListaAcomodacoes />;
            default:
                return <Home />;
        }
    }
}
