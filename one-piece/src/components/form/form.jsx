import { useState } from 'react';
import { api } from '../../utils/api/api';
import './form.css';

export function Form({ getAll, handleModal }) {
  const [newCharacter, setNewCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    handleModal();
    api.createCharacter(newCharacter);
    setTimeout(() => {
      getAll();
    }, 3000);
    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <div> loading...</div>
      ) : (
        <div className="form">
          <form onSubmit={handleSubmit} className="form-inputs">
            <section>
              <span>Name:</span>
              <input
                type="text"
                name="name"
                onChange={(event) => {
                  setNewCharacter({
                    ...newCharacter,
                    name: event.target.value,
                  });
                }}
              ></input>
            </section>
            <section>
              <span>Title:</span>
              <input
                type="text"
                name="title"
                onChange={(event) => {
                  setNewCharacter({
                    ...newCharacter,
                    title: event.target.value,
                  });
                }}
              ></input>
            </section>
            <section>
              <span>Gender:</span>
              <input
                type="text"
                name="gender"
                onChange={(event) => {
                  setNewCharacter({
                    ...newCharacter,
                    gender: event.target.value,
                  });
                }}
              ></input>
            </section>
            <section>
              <span>ImageURL:</span>
              <input
                type="text"
                name="imageURL"
                onChange={(event) => {
                  setNewCharacter({
                    ...newCharacter,
                    imageURL: event.target.value,
                  });
                }}
              ></input>
            </section>
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}
