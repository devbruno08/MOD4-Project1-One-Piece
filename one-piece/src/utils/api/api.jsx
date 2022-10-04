const defaultUrl = "https://piece-api.herokuapp.com/characters";

export const api = {
    createCharacter: async (character) => {
      const response = await fetch(defaultUrl + "/create", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(character),
      });
      const newCharacter = await response.json();
      return newCharacter;
    },

    getAllCharacters: async () => {
        const response = await fetch(defaultUrl + "/all-characters");
        const allCharacters = await response.json();
        console.log(allCharacters);
        return allCharacters;
      },

      deleteCharacter: async (idParam) => {
        const response = await fetch(defaultUrl + "/delete/" + idParam, {
          method: "DELETE",
          headers: new Headers({ "Content-Type": "application/json" }),
        });
        const characterDeleted = await response.json();
        return characterDeleted;
      },

      updateCharacter: async (character) => {
        const response = await fetch(defaultUrl + "/update", {
          method: "PUT",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify(character),
        });
    
        const characterUpdated = await response.json();
        return characterUpdated;
      },
    };
