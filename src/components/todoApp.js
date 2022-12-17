import { Component } from "react";
// import styles from "./css/todo_1.module.css";
import { Container, Button, Form, Col, Row, InputGroup,Card} from 'react-bootstrap';



export class ToDoApp extends Component{

    state = {
        value: "",
        tasks: [],
        checkedTasks: new Set(),
        show:  false,
    }

    handleChange = (e) =>{
        this.setState({
            value: e.target.value,
        });
    }

    addTasks = () => {
        const inputValue = {value: this.state.value.trim(), key: this.makeid(10),};

        if(!inputValue?.value){
            return;
        }

        const tasks = [...this.state.tasks];
        tasks.push(inputValue);
        this.setState({
            value: '',
            tasks: tasks,
        });

        if(tasks.length > 0){
            this.setState({
                show:  true,
            });
         }
    }

    toggleChange = (key) =>{

      const data = new Set([...this.state.checkedTasks]);

      data.has(key) ? data.delete(key) : data.add(key);

      this.setState({
        checkedTasks: data
      });
    }

    removeTasks = ({target}) => {
       const key = target.dataset.key;
       const filteredTasks = this.state.tasks.filter(task => task.key !== key);
       const checkedTasks = this.state.checkedTasks;

       checkedTasks.delete(key);

       this.setState({
            tasks: filteredTasks,
       });
    }

    removeAllCheckedTasks = () => {

        const tasks = this.state.tasks.filter((task) => {
            // ete ka taski key checked tasksm petqa jnjenq dranq
            return !this.state.checkedTasks.has(task.key);
        });

        this.setState({
            checkedTasks: new Set(),
            tasks,
            show:  !!tasks.length,
       });
    }

    render(){

        const li = this.state.tasks.map((task,index)=>{
            return (
                    <Col xl={2} lg={3} md={4} sm={6} xs={12} key={task.key} >
                        <Card>

                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Card.Title>{task.value}</Card.Title>
                                    <input type="checkbox" checked={this.state.checkedTasks.has(task.key)} onChange={() => this.toggleChange(task.key)}/>
                                </div>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                <Button data-key={task.key} onClick={this.removeTasks} disabled={this.state.checkedTasks.has(task.key)} variant="outline-danger">Delete</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
        });

        return(
            <Container>
                <Col className="mt-3">
                    <InputGroup className="mb-3">
                        <Form.Control disabled={!!this.state.tasks.length && !!this.state.checkedTasks.size}
                        placeholder="Add new task" onKeyDown={(e) =>  e.key === 'Enter' ? this.addTasks() : null} value={this.state.value} onChange={this.handleChange}
                        />
                        <Button variant="outline-primary" onClick={this.addTasks} id="button-addon2" disabled={this.state.tasks.length && this.state.checkedTasks.size}>
                            Button
                        </Button>
                    </InputGroup>
                </Col>
                <Col>
                    <ol className='row'>
                        {li}
                    </ol>

                    {this.state.show ? <Col className={"col-2 offset-5 mt-2"}><Button disabled={!this.state.checkedTasks.size} onClick={this.removeAllCheckedTasks}>Remove Selected</Button></Col> : null}
                </Col>
            </Container>

        );
    }


    makeid(length = 10) {
        let result           = '';
        let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;

        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }
}