import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { Component } from 'react'

// for creating a state object, you need a Class based component...
// just write the Class signature and wrap the return statement in a render() method

class App extends Component {
  state = {
    movieTitle: 'Batman Begins',
  }

  render() {
    // the render() method is mandatory in every class component
    // it will fire again every time there's a change in the state or in the props of this component
    console.log('render fired again!')
    return (
      <div className='App mt-3'>
        <Container>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Choose your movie!</Form.Label>
                <Form.Control
                  as='select'
                  value={this.state.movieTitle}
                  onChange={(e) =>
                    this.setState({
                      movieTitle: e.target.value,
                    })
                  }
                >
                  {/* every input field in React should be controlled! */}
                  <option>Batman Begins</option>
                  <option>Wonder Woman</option>
                  <option>Man of Steel</option>
                  <option>The Flash</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
