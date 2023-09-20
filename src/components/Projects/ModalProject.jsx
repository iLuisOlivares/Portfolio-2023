
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 6px;
  height: 48px;
  width: 60px;
  color: #ffffff;
  font-size: 17px;
  font-weight: 600;
  background-color: #3d3636;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  transition: all .4s cubic-bezier(.15,.75,.45,.95);
  
  -webkit-box-shadow: 0px 15px 40px -10px #000000;
  @media screen and (max-width: 900px) {
    margin: 5px;
    height: 50px;
    border-radius: 20px;
    width: 320px;
  }
`;

export function ModalProject(props) {
    return (
        <Modal
            style={{ overflow: 'hidden' }}
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className='model-color rounded-0' closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='model-color rounded-0'>
                <div class="ratio ratio-16x9">
                    <iframe src={props.video} title="YouTube video" allowfullscreen></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer className='model-color rounded-0'>
                <Button onClick={props.onHide} >Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
