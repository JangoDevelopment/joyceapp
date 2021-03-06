import React from "react";
import "./styles.css";

import useWindowDimensions from "../../hooks/getWindowDimensions";

import curriculo from "../../data/curriculo.js";

const ApresentacaoComponent = (props) => {
    const { width } = useWindowDimensions();

    const pc_component = (
        <div className="apresentacao flex-column">
            <div className="block_1">
                <div className="info">
                    <h1>valores</h1>
                    <p>
                        Apaixonada pelo meu trabalho, acredito que a Arquitetura e o Urbanismo tem o poder de transformar vidas. <br /> <br /> Minha missão é
                        apresentar o melhor resultado dentro dos parâmetros desejados e buscar sempre as melhores soluções para o cliente.
                    </p>
                </div>
                <div className="background_image"></div>
            </div>
            <div className="block_2">
                <div className="info">
                    <h1>curriculo</h1>
                    <div className="scrollable">
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Formação</h2>
                            <div className="curso flex-column">
                                <h3 className="titulo">Graduada em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Campinas</h3>
                                <h4 className="local">PUC Campinas</h4>
                            </div>
                        </section>
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Cursos</h2>
                            {curriculo.map((curso) => {
                                return (
                                    <div className="curso flex-column">
                                        <h3 className="titulo">{curso.titulo}</h3>
                                        <h4 className="local">{curso.local}</h4>
                                        <h4 className="carga">{curso.carga}</h4>
                                        <h4 className="enfase">{curso.enfase}</h4>
                                    </div>
                                );
                            })}
                        </section>
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Experiência Profissional</h2>
                            <div className="curso flex-column">
                                <h3 className="titulo">Ricardo Rabello Arquiteto</h3>
                                <h4 className="carga">Cargo: Estagiária</h4>
                                <h4 className="enfase">1 ano e 3 meses</h4>
                            </div>
                            <div className="curso flex-column">
                                <h3 className="titulo">Prefeitura de Campinas: Plano de Desenvolvimento da Fazenda Candido Ferreira</h3>
                                <h4 className="carga">Cargo: Estagiária</h4>
                                <h4 className="enfase">4 meses</h4>
                            </div>
                        </section>
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Seminários</h2>
                            <div className="curso flex-column">
                                <h3 className="titulo">II Seminário de Urbanização de Favelas </h3>
                                <h4 className="local">Rio de Janeiro, novembro de 2016</h4>
                            </div>
                        </section>
                    </div>
                </div>
                <div className="background_image"></div>
            </div>
        </div>
    );

    const mobile_component = (
        <div className="mobile flex-column">
            <div className="block_1">
                <div className="info">
                    <h1>valores</h1>
                    <p>
                        Apaixonada pelo meu trabalho, acredito que a Arquitetura e o Urbanismo tem o poder de transformar vidas. <br /> <br /> Minha missão é
                        apresentar o melhor resultado dentro dos parâmetros desejados e buscar sempre as melhores soluções para o cliente.
                    </p>
                </div>
            </div>
            <div className="block_2">
                <div className="info">
                    <h1>curriculo</h1>
                    <div className="scrollable">
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Formação</h2>
                            <div className="curso flex-column">
                                <h3 className="titulo">Graduada em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Campinas</h3>
                                <h4 className="local">PUC Campinas</h4>
                            </div>
                        </section>
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Cursos</h2>
                            {curriculo.map((curso) => {
                                return (
                                    <div className="curso flex-column">
                                        <h3 className="titulo">{curso.titulo}</h3>
                                        <h4 className="local">{curso.local}</h4>
                                        <h4 className="carga">{curso.carga}</h4>
                                        <h4 className="enfase">{curso.enfase}</h4>
                                    </div>
                                );
                            })}
                        </section>
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Experiência Profissional</h2>
                            <div className="curso flex-column">
                                <h3 className="titulo">Ricardo Rabello Arquiteto</h3>
                                <h4 className="carga">Cargo: Estagiária</h4>
                                <h4 className="enfase">1 ano e 3 meses</h4>
                            </div>
                            <div className="curso flex-column">
                                <h3 className="titulo">Prefeitura de Campinas: Plano de Desenvolvimento da Fazenda Candido Ferreira</h3>
                                <h4 className="carga">Cargo: Estagiária</h4>
                                <h4 className="enfase">4 meses</h4>
                            </div>
                        </section>
                        <section className="curriculo flex-column">
                            <h2 className="section_title">Seminários</h2>
                            <div className="curso flex-column">
                                <h3 className="titulo">II Seminário de Urbanização de Favelas </h3>
                                <h4 className="local">Rio de Janeiro, novembro de 2016</h4>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );

    return <div className="apresentacao flex-column">{width > 768 ? pc_component : mobile_component}</div>;
};

export default ApresentacaoComponent;
