import {Component} from "react";
import {Container, Button, Form, Col, InputGroup} from 'react-bootstrap';

export class AddTask extends Component {

    state = {
        value: ""
    }
    handleChange = (e) => {

        this.setState({
            value: e.target.value
        });
    }

    render() {
        const {checkedTasksSize: size, addTasks} = this.props;

        return (
            <Container>
                <Col className="mt-3">
                    <InputGroup className="mb-3">
                        <Form.Control disabled={!!size}
                                      placeholder="Add new task"
                                      onKeyDown={(e) => e.key === 'Enter' ? addTasks() : null}
                                      value={this.state.value} onChange={this.handleChange}
                        />
                        <Button
                            variant="outline-primary"
                            onClick={()=>{
                                addTasks(this.state.value)
                                this.setState({
                                    value: ""
                                });
                            }}
                            id="button-addon2"
                            disabled={!!size}>
                            Button
                        </Button>
                    </InputGroup>
                </Col>
            </Container>
        )

    }

}