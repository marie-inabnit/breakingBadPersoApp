import React, {useState} from "react"
import Modal from "react-modal"
import "./Cardhome.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'


Modal.setAppElement('#root')

function CardHome(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <div className="cardHomeContainer">
        <img className="cardHomeImg" src={props.image} alt="" />
  <h4 className="cardHomeName">{props.name}</h4>
        <FontAwesomeIcon className="cardHomeInfo" icon={faInfoCircle} onClick={() => setModalIsOpen(true)} />
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="cardHomeModal" shouldCloseOnOverlayClick={true}>
        <img className="modalImg" src={props.image} alt="" />
        <h2>{props.name}</h2>
        <p>Also known as: {props.nickname}</p>
        <p>Birthday: {props.birthday}</p>
        <p>Status: {props.status}</p>
        <p>Actor/Actress: {props.portrayed} </p>
        <button className="modalButton" onClick={() => setModalIsOpen(false)}>Close</button>
      </Modal>
    </>
  )
}

export default CardHome