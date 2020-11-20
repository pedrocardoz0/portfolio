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
                    A little bit about me
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ex.
                    Vestibulum vulputate risus vel ante venenatis,
                    ut eleifend felis pulvinar. Pellentesque congue commodo sapien, at sollicitudin odio eleifend sit amet.
                  </p>
                  <Header as="h1" style={{ fontSize: "2em" }} style={{fontFamily: "test2"}}>
                    What i'm doing here ?
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet dictum ex.
                    Vestibulum vulputate risus vel ante venenatis, ut eleifend felis pulvinar.
                    Pellentesque congue commodo sapien, at sollicitudin odio eleifend sit amet.
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
            Open project's that i have made
          </Header>

          <Segment style={{ padding: "3em 0em" }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: "2em" }} style={{ fontFamily: "test2", fontSize: 25 }}>
                Hackathon pela vida
              </Header>
              
              <p style={{ fontSize: "1.33em" }}>
                Instead of focusing on content creation and hard work, we have learned how to master the
                art of doing nothing by providing massive amounts of whitespace and generic content that
                can seem massive, monolithic and worth your attention.
              </p>

              <Button as="a" size="large" href={"https://www.hackathonpelavida.com.br/"}>
                go to the website
              </Button>

              <Header as="h3" style={{ fontSize: "2em" }} style={{ fontFamily: "test2", fontSize: 25 }}>
                Go to my github
              </Header>

              <p style={{ fontSize: "1.33em" }}>
                Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                it"s really true. It took years of gene splicing and combinatory DNA research, but our
                bananas can really dance.
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
            Thx for you attention! Hope to see you ASAP
          </a>
        </footer>
      </div>
    )
  }
}
