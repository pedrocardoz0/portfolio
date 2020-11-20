import React, { Component } from 'react';
import { Container, Divider, Grid, Header, Image, Segment } from 'semantic-ui-react'
import MenuComponent from '../components/menu/Menu';
import styles from "../styles/Home.module.css";
import "semantic-ui-css/semantic.min.css";

class Skill extends Component {
    render() {
        return (
                <div className={styles.container}>
                    <MenuComponent />
                    <Container text>
                        <Header as='h1' dividing style={{fontFamily: "test2"}}>
                            Experiência
                        </Header>
                        <Header as='h3' style={{fontFamily: "test2"}}>Life (Estagiário)</Header>
                        <p>
                            Experiência em desenvolvimento de aplicações <b>Mobile</b> e <b>Web</b>
                        </p>
                    </Container>
                    
                    <Container text>
                        <Header as='h1' dividing style={{fontFamily: "test2", paddingTop: 50}}>
                            Habilidades
                        </Header>

                    <Grid  container stackable>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Segment>React</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>Express</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                            <Segment>GraphQL</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>Mysql</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>React Native</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                            <Segment>Python</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>English</Segment>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns={3}>
                            <Grid.Column>
                            <Segment>Javascript</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>HTML</Segment>
                            </Grid.Column>
                            <Grid.Column>
                            <Segment>CSS</Segment>
                            </Grid.Column>
                        </Grid.Row>

                        
                        
                    </Grid>
                    </Container>

                    <Container text>
                        <Header as='h1' dividing style={{fontFamily: "test2", paddingTop: 50}}>
                            Educação
                        </Header>
                        <Header as='h3' style={{fontFamily: "test2"}}>Sistemas de Informação (Bacharel) - Univem</Header>
                    </Container>

                </div>
        )
    }
}

export default Skill;