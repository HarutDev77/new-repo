import { Component } from "react";
import styles from "./css/todo_1.module.css";
import { Container, Button, Col, Row, Card} from 'react-bootstrap';
import { AddTask } from "./addTask";
import  Confirm  from "./confirm";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPenSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
const remove = <FontAwesomeIcon icon={faPenSquare} />
const deleteTask = <FontAwesomeIcon icon={faTrash} />




export class ToDoApp extends Component{

    state = {
        tasks: [],
        checkedTasks: new Set(),
        show:  false,
        showModal: false,
        showAddTask: false,
        description: "",
        key: 0
    }

    addTasks = (title, description) => {
        const inputValue = {title: title.trim(), description: description.trim(), key: this.makeid(10)};

        if(!inputValue?.title){
            return;
        }

        const tasks = [...this.state.tasks];
        tasks.push(inputValue);
        this.setState({
            tasks: tasks,
            showAddTask: false
        });

        if(tasks.length > 0){
            this.setState({
                show:  true,
            });
         }
    }
    editTasks = (key, title, description) => {
        const newTasks = [];
        this.state.tasks.forEach((task)=>{

            if(task.key === key){
                task.title = title;
                task.description = description;
            }

            newTasks.push(task);
        });

        this.setState({
            tasks: newTasks,
            key: 0,
            showAddTask: false
        });
    }

    toggleChange = (key) =>{

      const data = new Set([...this.state.checkedTasks]);

      data.has(key) ? data.delete(key) : data.add(key);

      this.setState({
        checkedTasks: data
      });
    }

    removeTasks = (key) => {
       const filteredTasks = this.state.tasks.filter(task => task.key !== key);
       const checkedTasks = this.state.checkedTasks;

       checkedTasks.delete(key);

       if(!filteredTasks.length){
           this.setState({show: false})
       }

       this.setState({
            tasks: filteredTasks,
       });
    }

    removeAllCheckedTasks = () => {

        const tasks = this.state.tasks.filter((task) => {
            // ete ka taski key checked tasksum petqa jnjenq dranq
            return !this.state.checkedTasks.has(task.key);
        });

        this.setState({
            checkedTasks: new Set(),
            tasks,
            show:  !!tasks.length,
            showModal: false
       });
    }

    showModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    showAddTask = () => {
        this.setState({
            showAddTask: true,
            key: ''
        });
    }
    dontAdd = () =>{
        this.setState({
            showAddTask: false
        });
    }

    toggleCheckeds = (type='check') => {
        let newCheckedTasks = [];
        this.state.tasks.map((task)=>{
           return newCheckedTasks.push(task.key);
        });

        type === 'uncheck' ? this.setState({
            checkedTasks: new Set()
        }) : this.setState({
            checkedTasks: new Set(newCheckedTasks)
        });
    }

    editTask = (key) => {

        this.setState({
            showAddTask: true,
            key: key,
        })
    }

    render(){


        const li = this.state.tasks.map((task)=>{
            return (
                    <Col xl={2} lg={3} md={4} sm={6} xs={12} key={task.key} >
                        <Card className={'mb-3'}>

                            <Card.Body>
                                <div className="d-flex justify-content-between align-items-center">
                                    <Card.Title>{task.title}</Card.Title>
                                    <input type="checkbox" checked={this.state.checkedTasks.has(task.key)} onChange={() => this.toggleChange(task.key)}/>
                                </div>
                                    <Card.Text>
                                        {task.description}
                                    </Card.Text>
                                <Button  data-key={task.key} className={'m-1'} onClick={()=>this.editTask(task.key)} disabled={this.state.checkedTasks.has(task.key)} variant="outline-warning">{remove}</Button>
                                <Button onClick={()=>this.removeTasks(task.key)} disabled={this.state.checkedTasks.has(task.key)} variant="outline-danger">{deleteTask}</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                );
        });

        return(
            <>
                <Container>
                    <Row>
                        <Col
                            xl={2} lg={2} md={3} sm={4} xs={4}
                        >
                            <Button
                                variant={"primary"}
                                className={`mt-3 mb-3 ${styles.btn_full}`}
                                onClick={this.showAddTask}
                            >
                                Add new task
                            </Button>
                        </Col>
                        <Col
                            xl={2} lg={2} md={3} sm={3} xs={3}
                        >
                            <Button
                                variant={"success"}
                                className={`mt-3 mb-3 ${styles.btn_full}`}
                                onClick={()=>this.toggleCheckeds('check')}
                            >
                                Check all
                            </Button>
                        </Col>
                        <Col
                            xl={2} lg={2} md={3} sm={3} xs={4}
                        >
                            <Button
                                variant={"warning"}
                                className={`mt-3 mb-3 ${styles.btn_full}`}
                                onClick={()=>this.toggleCheckeds('uncheck')}
                            >
                                Uncheck all
                            </Button>
                        </Col>
                    </Row>
                </Container>
                {this.state.showAddTask &&
                    <AddTask
                        data={ this.state.key ? this.state.tasks.filter(value => value.key === this.state.key) : []}
                        dontAdd={()=>this.dontAdd()}
                        addTasks = {
                            (title, description) => {
                                this.addTasks(title, description);
                            }
                        }
                        editTasks = {
                            (key, title, description) => {
                                this.editTasks(key, title, description);
                            }
                        }

                />}
                {this.state.showModal && <Confirm
                    checkedTasksSize = {this.state.checkedTasks.size}
                    confirmAction = {this.removeAllCheckedTasks}
                    showModal={this.showModal}
                />}
                <Container>
                    <Col>
                        <ol className='row'>
                            {li}
                        </ol>

                        {this.state.show ? <Col xl={2} lg={2} md={3} sm={4} xs={4} className={"col-2 offset-5 mt-2"}><Button disabled={!this.state.checkedTasks.size} onClick={this.showModal}>Remove Selected</Button></Col> : null}
                    </Col>
                </Container>
            </>

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