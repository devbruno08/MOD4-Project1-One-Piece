import { RiMenuAddLine } from "react-icons/ri"
import {useState} from "react";
import Modal from "react-modal";
import "./header.css"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement("#root");
export function Header({ getAll}) {
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
                    <button className="insert-button">
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
            
            </Modal>
        </>
    );

}