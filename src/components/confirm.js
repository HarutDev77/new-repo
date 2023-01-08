import {Modal, Button} from 'react-bootstrap';
import PropTypes from 'prop-types'

function Confirm (props) {
    return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal

                show={true}
                onHide={props.showModal}
                size="lg"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure, you want to delete {props.checkedTasksSize} task(s)</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button
                        variant="danger"
                        onClick={props.confirmAction}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="primary"
                        onClick={props.showModal}
                    >
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

Confirm.propTypes = {
    checkedTasksSize: PropTypes.number.isRequired,
    confirmAction: PropTypes.func.isRequired,
    showModal: PropTypes.func.isRequired,
};

export default Confirm;