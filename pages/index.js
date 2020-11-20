import React, { Component } from "react";
import styles from "../styles/Home.module.css";
import MenuComponent from "../components/menu/Menu";
import { Example } from '../components/head/Hello';
import "semantic-ui-css/semantic.min.css";

import {
  Button,
  Container,
  Segment,
  Grid,
  Header,
  Image,
} from "semantic-ui-react"


export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      activeItem: "home"
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div className={styles.container}>

        <main className={styles.main}>
          <Image rounded size="small" src="dripping.png" style={{position: "absolute", top: "7%", left: "4%"}}/>        

          <h1 className={styles.title} style={{fontFamily: "test", fontSize: 100}}>
            <Example /> <a style={{textDecoration: "none"}}>Pedro</a>
          </h1>
          <MenuComponent />

          <p className={styles.description}>
            let's get started{" "}
          </p>

          <Segment style={{ padding: "2.5em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h1" style={{ fontSize: "2em" }} style={{fontFamily: "test2"}}>
                    Um pouco sobre mim
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Estudante de Sistemas de Informação, atualmente trabalho na Life no setor de
                    engenharia de software, busco sempre aplicar meus conhecimentos e melhorá-los
                    da melhor maneira possível. Sou um eterno estudante e apaixonado por novas
                    tecnologias, sempre busco diferentes fontes de conhecimentos.
                  </p>
                  <Header as="h1" style={{ fontSize: "2em" }} style={{fontFamily: "test2"}}>
                    Hobbies
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    No meu tempo livre gosto de jogar, ler, escutar música, andar de bicicleta ou
                    procurar alguma coisa nova no github.
                  </p>
                </Grid.Column>

                <Grid.Column floated="right" width={6}>

                  <Image rounded size="tiny" src="pikachu.gif" />        
                  <Image bordered rounded size="large" src="me.jpeg" />
                </Grid.Column>
              </Grid.Row>

            </Grid>
          </Segment>
          
          <Header as="h1" style={{ fontSize: "3em" }} style={{ fontFamily: "test2", fontSize: 35 }}>
            Projetos Open Source que participei
          </Header>

          <Segment style={{ padding: "3em 0em" }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: "2em" }} style={{ fontFamily: "test2", fontSize: 25 }}>
                Hackathon pela vida
              </Header>
              
              <p style={{ fontSize: "1.33em" }}>
                Com a pandemia da covid-19 surgiu a necessidade de digitalização dos casos dos pacientes, a Life em 
                conjunto com a Unimed, ASSERTI e ACIM iniciaram um Hackathon para crianção de uma plataforma digital
                para o registro e acompanhamento da doença.
              </p>

              <Button as="a" size="large" href={"https://www.hackathonpelavida.com.br/"}>
                go to the website
              </Button>

              <Header as="h3" style={{ fontSize: "2em" }} style={{ fontFamily: "test2", fontSize: 25 }}>
                Meu github
              </Header>

              <p style={{ fontSize: "1.33em" }}>
                Você pode conferir os meus repositórios e conhecer um pouco das ferramentas que trabalho
                e meus arquivos de estudos.
              </p>

              <Button as="a" size="large" href={"https://github.com/pedrocardoz0"}>
                go to the website
              </Button>

            </Container>
          </Segment>

        </main>

        <footer className={styles.footer}>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Obrigado pela sua atenção! © Pedro Cardozo
          </a>
        </footer>
      </div>
    )
  }
}
