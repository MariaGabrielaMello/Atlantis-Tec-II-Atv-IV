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

export default class CadastrarDependente extends Component<props, state> {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center vh-90" style={{ backgroundColor: "#f0f8ff" }}>
        <div className="col-md-6">
        <br></br>
          <div className="border p-3" style={{ borderRadius: "10px", backgroundColor: "#f0f8ff" }}>
            <form>
              <h4>Cadastrar Dependente</h4>
              <select className="form-select mb-3" aria-label="Default select example">
                <option selected>Selecione o cliente Titular</option>
                <option value="1">Luis Souza</option>
                <option value="2">Julia Rocha</option>
                <option value="3">Carolina Alves</option>
                <option value="4">Beatriz Ferreira</option>
                <option value="5">Maria Luiza Silva</option>
                <option value="6">Felix Lima</option>
                <option value="7">Rodrigo Oliveira</option>
              </select>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome do Dependente"
                  aria-label="Nome do Dependente"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nome Social do Dependente"
                  aria-label="Nome Social do Dependente"
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
              <select className="form-select mb-3" aria-label="Default select example">
                    <option selected>Selecione o tipo do Documento</option>
                    <option value="1">CPF</option>
                    <option value="2">RG</option>
                    <option value="3">Passaporte</option>
                  </select>
                  <div className="row">
                  <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Data Emissão"
                      aria-label="Data Emissão"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Número do Documento"
                      aria-label="Número do Documento"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="DDD"
                      aria-label="DDD"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Número de telefone"
                      aria-label="Número de telefone"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Rua"
                      aria-label="Rua"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Número"
                      aria-label="Número"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Bairro"
                      aria-label="Bairro"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cidade"
                      aria-label="Cidade"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Estado"
                      aria-label="Estado"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Código Postal"
                      aria-label="Código Postal"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                </div>
              </div>
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
        </div>
      </div>
    );
  }
}
