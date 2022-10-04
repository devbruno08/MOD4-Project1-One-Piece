import { RiMenuAddLine } from "react-icons/ri"
import { useState } from "react";
import { Form } from "../form/form"
import Modal from "react-modal";
import "./header.css"

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "21rem",
      height: "20rem",
      transform: "translate(-50%, -50%)",
      backgroundColor: " rgba(0, 0, 0, 0.8)",
      borderRadius: "15px",
      border:"none",
    },
    overlay: {
      background: "rgba(0, 0, 0, 0.4)",
    },
};

Modal.setAppElement("#root");
export function Header({ getAll }) {
    const [modalIsOpen, setModalOpen] = useState(false);

    function handleModal() {
        setModalOpen(!modalIsOpen);
    }

    return(
        <>
            <header className="header">
                <figure className="header-figure">
                    <img className="piece-logo" src="./onepiece.png" alt="one-piece-logo" height="90" />
                </figure>            
                <section>
                    <button className="insert-button" onClick={handleModal}>
                        <RiMenuAddLine size={30} />
                    </button>
                </section>
            </header>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleModal}
            style={customStyles}
            contentLabel="form Create"
            >
                <Form getAll={getAll} handleModal={handleModal} />
            </Modal>
        </>
    );

}