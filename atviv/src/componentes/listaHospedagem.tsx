/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

type ClienteData = {
    nome?: string;
    nomeSocial?: string;
    email?: string;
    ddd?: string;
    telefone?: string;
    checkin?: string;
    checkout?: string;
    acomodacao?: string;
    quarto?: string;
}

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

export default class ListaHospedagem extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            clientes: ["Luis Souza", "Julia Rocha", "Maria Luiza Silva", "Felix Lima", "Rodrigo Oliveira"],
            filteredClientes: ["Luis Souza", "Julia Rocha", "Maria Luiza Silva", "Felix Lima", "Rodrigo Oliveira"],
            selectedCliente: null,
            clienteData: null,
            showModal: false,
            isEditing: false,
            searchQuery: ""
        };
    }

    selectCliente = (cliente: string) => {
        const clienteData = { nome: cliente, nomeSocial: "", email: "", ddd: "", telefone: "", checkin: "", checkout: "", acomodacao: "", quarto: "" };
        this.setState({ selectedCliente: cliente, clienteData, showModal: true });
    };

    handleClose = () => {
        this.setState({ showModal: false, isEditing: false });
    };

    handleEdit = () => {
        this.setState({ isEditing: true });
    };

    handleSave = () => {

        this.setState({ isEditing: false });
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState((prevState) => ({
            clienteData: {
                ...prevState.clienteData,
                [name]: value
            }
        }));
    };

    handleRemove = (cliente: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation();
        this.setState((prevState) => ({
            clientes: prevState.clientes.filter((c) => c !== cliente),
            filteredClientes: prevState.filteredClientes.filter((c) => c !== cliente)
        }));
    };

    handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchQuery = e.target.value.toLowerCase();
        this.setState((prevState) => ({
            searchQuery,
            filteredClientes: prevState.clientes.filter((cliente) =>
                cliente.toLowerCase().includes(searchQuery)
            )
        }));
    };

    render() {
        let tema = this.props.tema;
        let { selectedCliente, clienteData, showModal, isEditing, filteredClientes, searchQuery } = this.state;
        return (
            <div className="container-fluid" style={{ backgroundColor: '#f0f8ff' }}>
                <div className="container">
                    <div className="row">
                    </div>
                </div>
                <br></br>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pesquisar hóspede"
                        value={searchQuery}
                        onChange={this.handleSearch}
                    />
                </div>
                <div className="list-group">
                    {filteredClientes.map((cliente, index) => (
                        <div
                            key={index}
                            className="list-group-item list-group-item-action"
                            style={selectedCliente === cliente ? { backgroundColor: tema } : {}}
                        >
                            {cliente}
                            <div style={{ float: "right" }}>
                                <button
                                    className="btn btn-primary me-2"
                                    onClick={() => this.selectCliente(cliente)}
                                    style={{ backgroundColor: '#002e6b', borderColor: '#002e6b', color: 'white' }}
                                >
                                    Detalhes
                                </button>
                                <button
                                    className="btn btn-danger"
                                    onClick={(e) => this.handleRemove(cliente, e)}
                                    style={{ backgroundColor: '#C20101', borderColor: '#C20101', color: 'white' }}
                                >
                                    Remover
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                <Modal show={showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Detalhes do Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Check-in"
                                    aria-label="Check-in"
                                    aria-describedby="basic-addon1"
                                    name="Check-in"
                                    value={clienteData?.checkin || ""}
                                    onChange={this.handleChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Check-out"
                                    aria-label="Check-out"
                                    aria-describedby="basic-addon1"
                                    name="Check-out"
                                    value={clienteData?.checkout || ""}
                                    onChange={this.handleChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Acomodação"
                                    aria-label="Acomodação"
                                    aria-describedby="basic-addon1"
                                    name="Acomodação"
                                    value={clienteData?.acomodacao || ""}
                                    onChange={this.handleChange}
                                    disabled={!isEditing}
                                />
                            </div>
                            <div className="input-group mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Quarto"
                                    aria-label="Quarto"
                                    aria-describedby="basic-addon1"
                                    name="Quarto"
                                    value={clienteData?.quarto || ""}
                                    onChange={this.handleChange}
                                    disabled={!isEditing}
                                />
                            </div>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        {isEditing ? (
                            <Button variant="primary" onClick={this.handleSave} style={{ backgroundColor: '#002e6b', borderColor: '#002e6b', color: 'white' }}>
                                Salvar
                            </Button>
                        ) : (
                            <Button variant="primary" onClick={this.handleEdit} style={{ backgroundColor: '#002e6b', borderColor: '#002e6b', color: 'white' }}>
                                Editar
                            </Button>
                        )}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
