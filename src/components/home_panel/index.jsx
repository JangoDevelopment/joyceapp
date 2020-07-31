import React from "react";
import "./styles.css";

import styled from "styled-components";
import img0 from "./images/0.jpg";
import img1 from "./images/1.png";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";

const HomePanel = ({ painel }) => {
    const titulos = [
        { id: 0, content: "inovar", color: "#FEC90E" },
        { id: 1, content: "planejamento", color: "#EA7979" },
        { id: 2, content: "qualidade de vida", color: "#609BA3" },
        { id: 3, content: "funcionalidade", color: "#50967F" },
    ];

    const Image0 = styled.div`
        background-image: url(${img0});
    `;

    const Image1 = styled.div`
        background-color: #fff0f0;
        background-image: url(${img1});
    `;

    const Image2 = styled.div`
        background-image: url(${img2});
    `;

    const Image3 = styled.div`
        background-image: url(${img3});
    `;

    const Title = styled.h2`
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 86px;
        color: ${titulos[painel].color};
    `;

    return (
        <div className="home_panel">
            <div className="background">
                <div className="overlay flex-column">
                    <h1 className="unselectable">arquitetura é</h1>
                    <Title className="unselectable">{titulos[painel].content}</Title>
                </div>
                {painel === 0 ? <Image0 className="image" /> : null}
                {painel === 1 ? <Image1 className="image" /> : null}
                {painel === 2 ? <Image2 className="image" /> : null}
                {painel === 3 ? <Image3 className="image" /> : null}
            </div>
            <div className="left_triangle"></div>
        </div>
    );
};

export default HomePanel;