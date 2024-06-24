/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

type ClienteData = {
    nome?: string;
    nomeSocial?: string;
    email?: string;

};

type props = {
    tema: string;
};

type state = {
    clientes: string[];
    filteredClientes: string[];
    selectedCliente: string | null;
    clienteData: ClienteData | null;
    showModal: boolean;
    isEditing: boolean;
    searchQuery: string;
};

export default class CadastrarAcomodacao extends Component<props, state> {
    render() {
        let tema = this.props.tema;
        return (
            <div className="container-fluid d-flex justify-content-center align-items-center vh-120" style={{ backgroundColor: "#f0f8ff" }}>
                <div className="col-md-4">
                <br></br>
                    <div className="border p-3" style={{ borderRadius: "10px", backgroundColor: "#f0f8ff" }}>
                        <form>
                            <h4>Cadastrar Acomodação</h4>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nome da Acomodação"
                                    aria-label="Nome da Acomodação"
                                    aria-describedby="basic-addon1"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Quantidade de Camas Solteiro"
                                    aria-label="Quantidade de Camas Solteiro"
                                    aria-describedby="basic-addon2"
                                    min="1"
                                    max="10"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Quantidade de Camas Casal"
                                    aria-label="Quantidade de Camas Casal"
                                    aria-describedby="basic-addon2"
                                    min="1"
                                    max="10"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Quantidade de Suítes"
                                    aria-label="Quantidade de de Suítes"
                                    aria-describedby="basic-addon2"
                                    min="1"
                                    max="10"
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Quantidade de Garagens"
                                    aria-label="Quantidade de Garagens"
                                    aria-describedby="basic-addon2"
                                    min="1"
                                    max="10"
                                />
                            </div>
                            <select className="form-select mb-3" aria-label="Default select example">
                                <option selected>Possui Climatização:</option>
                                <option value="1">Sim</option>
                                <option value="2">Não</option>
                                </select>
                            <br />
                            <div className="input-group mb-3">
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    style={{ background: "#002e6b" }}
                                >
                                    Cadastrar
                                </button>
                            </div>
                        </form>
                    </div>
                    <br></br><br></br>
                    <br></br><br></br>
                </div>
            </div>
        );
    }
}
