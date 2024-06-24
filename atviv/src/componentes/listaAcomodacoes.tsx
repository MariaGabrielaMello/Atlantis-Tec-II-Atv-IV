import React from 'react';

interface AcomodacaoData {
    id: number;
    nome: string;
    CamaSolteiro: number;
    CamaCasal: number;
    Garagem: number;
    Climatizacao: boolean;
    Suite: number;
}

const acomodacoesTeste: AcomodacaoData[] = [
    { id: 1, nome: "Solteiro Simples", CamaSolteiro: 1, CamaCasal:0, Suite: 1, Climatizacao: true, Garagem: 0 },
    { id: 2, nome: "Solteiro Mais", CamaSolteiro: 0, CamaCasal: 1, Suite: 1, Climatizacao: true, Garagem: 1 },
    { id: 3, nome: "Casal Simples", CamaSolteiro: 0, CamaCasal: 1, Suite: 1, Climatizacao: true, Garagem: 1 },
    { id: 4, nome: "Familia Simples", CamaSolteiro: 2, CamaCasal: 1, Suite: 1, Climatizacao: true, Garagem: 1 },
    { id: 5, nome: "Família Mais", CamaSolteiro: 5, CamaCasal: 1, Suite: 2, Climatizacao: true, Garagem: 2 },
    { id: 6, nome: "Família Super", CamaSolteiro: 6, CamaCasal: 2, Suite: 3, Climatizacao: true, Garagem: 2 },
];

interface State {
    acomodacoes: AcomodacaoData[];
    acomodacaoSelecionada: number | null;
}

export default class ListaAcomodacoes extends React.Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            acomodacoes: acomodacoesTeste,
            acomodacaoSelecionada: null,
        };
    }

    listarAcomodacoes = () => {
        return this.state.acomodacoes.map((acomodacao) => (
            <div key={acomodacao.id} style={styles.acomodacaoContainer}>
                <div onClick={() => this.selecionarAcomodacao(acomodacao.id)} style={styles.acomodacaoHeader}>
                    <h2 style={acomodacao.nome === "Acomodação Luxo" ? styles.acomodacaoLuxo : styles.acomodacaoEconomica}>{acomodacao.nome}</h2>
                    <div className="seta" style={this.state.acomodacaoSelecionada === acomodacao.id ? styles.setaExpandida : styles.seta}></div>
                </div>
                {this.state.acomodacaoSelecionada === acomodacao.id && (
                    <div>
                        <p>Cama Solteiro: {acomodacao.CamaSolteiro}</p>
                        <p>Cama Casal: {acomodacao.CamaCasal}</p>
                        <p>Suítes: {acomodacao.Suite}</p>
                        <p>Garagem: {acomodacao.Garagem}</p>
                        <p>Climatização: {acomodacao.Climatizacao ? "Sim" : "Não"}</p>
                    </div>
                )}
            </div>
        ));
    };

    selecionarAcomodacao = (id: number) => {
        this.setState((prevState) => ({
            acomodacaoSelecionada: prevState.acomodacaoSelecionada === id ? null : id
        }));
    };

    render() {
        return (
            <div style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px' }}>
                <form>
                    {this.listarAcomodacoes()}
                </form>
            </div>
        );
    }
}

const styles = {
    acomodacaoContainer: {
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        marginLeft: '10px', 
        marginRight: '10px', 
    },
    acomodacaoHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
    },
    acomodacaoLuxo: {
        fontSize: '16px',
    },
    acomodacaoEconomica: {
        fontSize: '16px',
    },
    seta: {
        width: '10px',
        height: '10px',
        borderLeft: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        transform: 'rotate(-45deg)',
    },
    setaExpandida: {
        width: '10px',
        height: '10px',
        borderTop: '1px solid #ccc',
        borderRight: '1px solid #ccc',
        transform: 'rotate(135deg)'
    }
};
