/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

type props = {
    tema: string,
    botoes: string[],
    corTexto: string;
    corBotao: string;
    seletorView: Function
}

export default class BarraNavegacao extends Component<props>{
    constructor(props: props | Readonly<props>) {
        super(props)
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this)
    }


    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = this.props.botoes.map(valor =>
                <li key={valor} className="menu-button">
                    <a className="nav-link" href="#" onClick={(e) => this.props.seletorView(valor, e)}>{valor}</a>
                </li>
            )
            return lista
        }
    }

    render() {
        const listaBotoes = this.gerarListaBotoes(); 
        return (
            <>
                <nav className="navbar navbar-expand-lg"  style={{ backgroundColor: "#002e6b" }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1" style={{ color: '#f0f8ff' }}>Atlantis</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {Array.isArray(listaBotoes) ? listaBotoes.slice(0, -4).map(botao => botao) : null} 
                        </ul>
                        <div className="ms-auto">
                            <ul className="navbar-nav">
                                {Array.isArray(listaBotoes) ? listaBotoes.slice(-4).map(botao => botao) : null} 
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            </>
        )
    }
}