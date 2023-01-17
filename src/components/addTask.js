import {Component} from "react";
import {Container, Button, Modal, Form, Col, InputGroup, Row} from 'react-bootstrap';
import styles from "./css/addTaskStile.module.css"

export class AddTask extends Component {

    constructor(props) {
        super(props);

        this.state = {
            key: props.data.length ? props.data[0].key : '',
            title: props.data.length ? props.data[0].title : '',
            description: props.data.length ? props.data[0].description : '',
            show: true
        }
    }
    handleChange = (value, type = 'title') => {


        // this.setState({
        //     [type]: value
        // });

        if (type === 'title') {
            this.setState({
                title: value,
                show: false
            });
        } else if ('description') {
            this.setState({
                description: value,
            })
        }
    }

    // handleChangeData = (value) => {
    //     this.setState({
    //         dataTitle: value,
    //
    //     })
    // }


    render() {

        const {addTasks, editTasks, dontAdd, data} = this.props;

        return (
            <Modal
                show={true}
                onHide={this.props.dontAdd}
                size="lg"
                centered
            >
                <Modal.Header className={styles.modHeader} closeButton onKeyUp={(e) => e.key === 'Enter' ? addTasks(this.state.title, this.state.description) : null}>
                    <Modal.Title>

                    </Modal.Title>
                    <Container>
                        <Row>
                            <Col className="mt-3">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="Task title"
                                        value = {this.state.title}
                                        onChange={e => this.handleChange(e.target.value, 'title')}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        value = {this.state.description}
                                        className={'mt-2'}
                                        as="textarea"
                                        placeholder="Description"
                                        onChange={e => this.handleChange(e.target.value, 'description')}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Header>
                <Modal.Footer>
                    {data.length
                        ? <Button
                            onClick={() => editTasks(this.state.key, this.state.title, this.state.description)}
                            variant={'warning'}
                            >
                            Edit Task
                        </Button>

                        : <Button
                            onClick={() => addTasks(this.state.title, this.state.description)}
                        >
                        Add Task
                        </Button>
                    }
                    <Button
                        variant={"danger"}
                        onClick={dontAdd}
                    >
                        Cancel
                    </Button>

                </Modal.Footer>
            </Modal>

        )

    }

}