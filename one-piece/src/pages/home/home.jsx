import { useEffect, useState } from 'react';
import { Header } from '../../components/header/header';
import { Card } from '../../components/card/card';
import { api } from '../../utils/api/api';
import { CgClose } from 'react-icons/cg';
import Modal from 'react-modal';
import './home.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '21rem',
    height: '25rem',
    transform: 'translate(-50%, -50%)',
    backgroundColor: ' rgba(0, 0, 0, 0.8)',
    borderRadius: '15px',
    border: 'none',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.4)',
  },
};

Modal.setAppElement('#root');

export function Home() {
  const [characterList, setCharacterList] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [oneCharacter, setOneCharacter] = useState({});
  const [editCharacter, setEditCharacter] = useState(false);

  async function getCharacter() {
    const character = await api.getAllCharacters();
    setCharacterList(character);
  }

  function deleteCharacter(idParam) {
    api.deleteCharacter(idParam);
    const newCharacterList = characterList;
    newCharacterList.map((character, index) => {
      if (character.id === idParam) {
        newCharacterList.splice(index, 1);
        setCharacterList(newCharacterList);
        handleModal();
      }
    });
  }

  function handleModal() {
    setModalOpen(!modalOpen);
  }

  function changeCharacter(event) {
    event.preventDefault();

    const updatedCharacter = {
      id: oneCharacter.id,
      name: event.target.name.value,
      title: event.target.title.value,
      gender: event.target.gender.value,
      imageURL: event.target.imageURL.value,
    };

    const newCharacterList = characterList;
    newCharacterList.map((item, index) => {
      if (item.id === updatedCharacter.id) {
        newCharacterList.splice(index, 1, updatedCharacter);
        setCharacterList(newCharacterList);
        handleModal();
      }
    });
    setEditCharacter(false);
    api.updateCharacter(updatedCharacter);
  }

  useEffect(() => {
    getCharacter();
  }, []);

  return (
    <section className="home-page">
      <Header getAll={getCharacter} />
      <div className="card">
        {characterList.map((item, index) => {
          return (
            <button
              className="button-card"
              onClick={() => {
                setOneCharacter(item);
                handleModal();
              }}
              key={index}
            >
              <Card
                name={item.name}
                title={item.title}
                gender={item.gender}
                imageURL={item.imageURL}
              />
            </button>
          );
        })}
      </div>
      <Modal
        isOpen={modalOpen}
        onRequestClose={handleModal}
        style={customStyles}
        contentLabel="Card details"
      >
        {editCharacter ? (
          <>
            <div className="form">
              <form onSubmit={changeCharacter} className="form-inputs">
                <section>
                  <span>Name:</span>
                  <input
                    type="text"
                    name="name"
                    defaultValue={oneCharacter.name}
                  ></input>
                </section>
                <section>
                  <span>Title:</span>
                  <input
                    type="text"
                    name="title"
                    defaultValue={oneCharacter.title}
                  ></input>
                </section>
                <section>
                  <span>Gender:</span>
                  <input
                    type="text"
                    name="gender"
                    defaultValue={oneCharacter.gender}
                  ></input>
                </section>
                <section>
                  <span>ImageURL:</span>
                  <input
                    type="text"
                    name="imageURL"
                    defaultValue={oneCharacter.imageURL}
                  ></input>
                </section>
                <button type="submit" className="btn-submit">
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <section className="modal-infs">
              <section
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'flex-end',
                }}
              >
                <button
                  style={{
                    backgroundColor: 'transparent',
                    cursor: 'pointer',
                    border: 'none',
                  }}
                  onClick={handleModal}
                >
                  <CgClose onClick={handleModal} size={28} color="blue" />
                </button>
              </section>
              <img className="image-modal" src={oneCharacter.imageURL} />
              <h2>{oneCharacter.name}</h2>
              <h3>{oneCharacter.title}</h3>
              <h3>{oneCharacter.gender}</h3>
            </section>
            <section className="buttons">
              <button
                className="button-edit"
                onClick={() => {
                  setEditCharacter(true);
                }}
              >
                Edit
              </button>
              <button
                className="button-delete"
                onClick={() => {
                  deleteCharacter(oneCharacter.id);
                }}
              >
                Delete
              </button>
            </section>
          </>
        )}
      </Modal>
    </section>
  );
}
