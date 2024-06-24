import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

type ClienteData = {
    nome?: string;
    nomeSocial?: string;
    email?: string;
    cpf?: string;
    ddd?: string;
    telefone?: string;
    rua?: string;
    numero?: string;
    bairro?: string;
    cidade?: string;
    estado?: string;
    cep?: string;
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

export default class ListaCliente extends Component<props, state> {
    constructor(props: props) {
        super(props);
        this.state = {
            clientes: ["Luis Souza", "Julia Rocha", "Carolina Alves", "Beatriz Ferreira", "Maria Luiza Silva", "Felix Lima", "Rodrigo Oliveira"],
            filteredClientes: ["Luis Souza", "Julia Rocha", "Carolina Alves", "Beatriz Ferreira", "Maria Luiza Silva", "Felix Lima", "Rodrigo Oliveira"],
            selectedCliente: null,
            clienteData: null,
            showModal: false,
            isEditing: false,
            searchQuery: ""
        };
    }

    selectCliente = (cliente: string) => {
        const clienteData = { nome: cliente, nomeSocial: "", email: "", ddd: "", telefone: "", cpf: "", rua: "", numero: "", bairro: "", cidade: "", estado: "", cep: "" };
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
            <body className="container-fluid2">
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
                            placeholder="Pesquisar titular"
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
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                    <Modal show={showModal} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Detalhes do Titular</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nome"
                                                aria-label="Nome"
                                                name="nome"
                                                value={clienteData?.nome || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Nome social"
                                                aria-label="Nome social"
                                                name="nomeSocial"
                                                value={clienteData?.nomeSocial || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <span
                                                className="input-group-text"
                                                id="basic-addon1"
                                                style={{ background: tema }}
                                            >
                                                @
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="E-mail"
                                                aria-label="E-mail"
                                                name="email"
                                                value={clienteData?.email || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="CPF"
                                                aria-label="CPF"
                                                name="CPF"
                                                value={clienteData?.cpf || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Telefone"
                                                aria-label="Telefone"
                                                name="Telefone"
                                                value={clienteData?.telefone || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Rua"
                                                aria-label="Rua"
                                                name="Rua"
                                                value={clienteData?.rua || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Bairro"
                                                aria-label="Bairro"
                                                name="Bairro"
                                                value={clienteData?.bairro || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Número"
                                                aria-label="Número"
                                                name="Numero"
                                                value={clienteData?.numero || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Cidade"
                                                aria-label="Cidade"
                                                name="Cidade"
                                                value={clienteData?.cidade || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Estado"
                                                aria-label="Estado"
                                                name="Estado"
                                                value={clienteData?.estado || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                        <div className="input-group mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Código Postal"
                                                aria-label="Código Postal"
                                                name="CEP"
                                                value={clienteData?.cep || ""}
                                                onChange={this.handleChange}
                                                disabled={!isEditing}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            {isEditing ? (
                                <Button variant="primary" onClick={this.handleSave} style={{ backgroundColor: '#002e6b', borderColor: '#002e6b', color: 'white' }}>
                                    Salvar
                                </Button>
                            ) : (
                                <Button variant="secondary" onClick={this.handleEdit} style={{ backgroundColor: '#002e6b', borderColor: '#002e6b', color: 'white' }}>
                                    Editar
                                </Button>
                            )}
                        </Modal.Footer>
                    </Modal>
                </div>
            </body>
        );
    }
}
