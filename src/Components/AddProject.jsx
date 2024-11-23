import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function AddProject() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        ADD
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">

            <div className="col-6">
             <label>
              <input type="file" style={{display: 'none'}}/>
              <img src="https://img.freepik.com/premium-vector/project-concept-vector-business-horizontal-illustration-banner-white-background_104589-19.jpg"width={'100%'} height={'350px'} alt="" />

              </label>            
            <p className='text-danger fw-bolder'>* Only allows following file type formats .png .jpeg, .jpg</p>
            </div>

            <div className="col-6">

              <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
                <Form.Control type="text" placeholder="Title" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Github" className="mb-3">
                <Form.Control type="text" placeholder="Github" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingPassword" label="Website" className="mb-3">
                <Form.Control type="text" placeholder="Website" />
              </FloatingLabel>

              <FloatingLabel controlId="floatingTextarea2" label="Overview" className="mb-3">
              <Form.Control as="textarea" placeholder="Overview" style={{ height: '100px' }} />
              </FloatingLabel>


           
            </div>
          </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProject