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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque felis a est rhoncus tincidunt. Mauris maximus sollicitudin magna, et sagittis augue pretium vel. Nullam maximus lectus felis, ac mattis nibh pretium sit amet. Proin faucibus egestas elit non pretium. Aliquam ac malesuada felis.
                </p>

                <Divider horizontal>E</Divider>

                <Header as='h2' floated='right' style={{ fontFamily: "test2" }}>
                    Desenvolvimento Web
                </Header>

                <Divider clearing hidden/>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque felis a est rhoncus tincidunt. Mauris maximus sollicitudin magna, et sagittis augue pretium vel. Nullam maximus lectus felis, ac mattis nibh pretium sit amet. Proin faucibus egestas elit non pretium. Aliquam ac malesuada felis.
                </p>

            </Segment>
        </div>
    );
}