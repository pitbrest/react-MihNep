import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow({ content = 'something went wrong' }) {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	useEffect(() => {
		handleShow();
	}, []);

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Response: False</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{content === 'Too many results.' ? (
						<>
							<p>{content}</p>
							<p>The query must contain more than two letters</p>
						</>
					) : (
						<>
							<p>{content}</p>
							<p>Enter the correct request</p>
						</>
					)}
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default ModalWindow;
