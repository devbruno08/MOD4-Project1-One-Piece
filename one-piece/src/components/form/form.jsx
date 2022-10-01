import { useState } from "react";
import { api } from "../../utils/api/api";

export function Form ({ getAll, handleModal }) {
    const [newAnime, setNewCharacter] = useState({ characters: [] });
    const [loading, setLoading] = useState(false);

    async function handleSubmit(event) {
        setLoading(true);
        event.preventDefault();

        await api.createCharacter(newAnime);
        await getAll();
        setLoading(false);
        handleModal();
    }

    return(
        <>
        {loading ? (
            <div> loading...</div>
        ) : (
            <div className="form">
                <form>
                    <section>
                        <span>Name:</span>
                        <input
                            type="text"
                            name="name"
                            onChange={(event) => {
                                setNewCharacter({ ...newAnime, name: event.target.value });
                            }}
                        ></input>
                        </section>
                        <section>
                            <span>Title:</span>
                            <input 
                            type="text"
                            name="title"
                            onChange={(event) => {
                                setNewCharacter({ ...newAnime, title: event.target.value });
                            }}
                        ></input>
                        </section>
                        <section>
                            <span>Gender:</span>
                            <input 
                            type="text"
                            name="gender"
                            onChange={(event) => {
                                setNewCharacter({ ...newAnime, gender: event.target.value});
                            }}
                        ></input>
                        </section>
                        <button type="submit" className="btn=submit">
                            Enter
                        </button>
                </form>
            </div>
        )}
        </>
    );
}