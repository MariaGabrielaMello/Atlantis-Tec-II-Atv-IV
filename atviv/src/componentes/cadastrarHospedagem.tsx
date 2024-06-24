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

export default class CadastrarHospedagem extends Component<props, state> {
  render() {
    let tema = this.props.tema;
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center vh-90" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="col-md-4">
        <br></br>
          <div className="border p-3" style={{ borderRadius: "10px", backgroundColor: "#f0f8ff" }}>
            <form>
              <h4>Cadastrar Hospedagem</h4>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="CPF do Titular"
                  aria-label="CPF do Titular"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="basic-addon1"
                  style={{ background: "#002e6b", color: "white" }}
                >
                  @
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                  aria-label="E-mail"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Data de Check-in"
                  aria-label="Data de Check-in"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Data de Check-out"
                  aria-label="Data de Check-out"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Número do quarto"
                  aria-label="Número do quarto"
                  aria-describedby="basic-addon1"
                />
              </div>
              <select className="form-select" aria-label="Default select example">
                <option selected>Selecione a acomodação</option>
                <option value="1">Solteiro Simples</option>
                <option value="2">Solteiro Mais</option>
                <option value="3">Casal Simples</option>
                <option value="4">Família Simples</option>
                <option value="5">Família Mais</option>
                <option value="6">Família Super</option>
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
          <br></br><br></br>
          <br></br><br></br>
        </div>
      </div>
    );
  }
}
