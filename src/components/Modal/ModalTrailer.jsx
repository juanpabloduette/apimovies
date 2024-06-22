import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdOutlinePlayCircle } from "react-icons/md";

function ModalTrailer({movieid}) {
  const [show, setShow] = useState(false);
  const youtube = 'https://www.youtube.com/watch?v='

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)
    handleSearch()
  };

  const API_KEY = import.meta.env.VITE_API_KEY

  const handleSearch = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${movieid}/videos`,options)
    .then(response => response.json())
    .then(response => {
      
      // console.log(response.results[0]?.type)
      // const idnueva = response.results.map(item =>{
      //   console.log(item)
      // })
      
    })
    .catch(err => console.error(err));
  }

  return (
    <>
      <Button variant="primary" size="sm" onClick={handleShow}>
      <MdOutlinePlayCircle />View Trailer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trailer Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>Aca va el video trailer</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalTrailer