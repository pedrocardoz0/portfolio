import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import styles from "../styles/Home.module.css";
import MenuComponent from "../components/menu/Menu";
import { Container, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'

export default function about() {
    return (
        <div className={styles.container}>
            <MenuComponent />
            <h1 style={{ fontFamily: "test2", fontSize: 40 }}>Serviços</h1>
            
            <Segment style={{margin: "0 10%"}}>
                <Header as='h2' floated='left' style={{ fontFamily: "test2" }}>
                    Desenvolvimento Mobile
                </Header>

                <Divider clearing hidden/>
                <p>
                    Ofereço soluções hibrídas, aplicações para <b>Android</b> e <b>iOS</b>. Realizo aplicações completas
                    desde o frontend ao backend, meu ecossistema de trabalho são as stacks JS.
                </p>

                <Divider horizontal>E</Divider>

                <Header as='h2' floated='right' style={{ fontFamily: "test2" }}>
                    Desenvolvimento Web
                </Header>

                <Divider clearing hidden/>
                <p>
                    Criação de Single Page Aplication, Portfólio, Sistemas Simples, ShowCases e etc. Minhas soluções web
                    também estão ligadas aos frameworks Javascript (React).
                </p>

            </Segment>
        </div>
    );
}