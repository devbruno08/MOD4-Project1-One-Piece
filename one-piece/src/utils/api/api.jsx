const defaultUrl = "https://piece-api.herokuapp.com/characters";

export const api = {
    createCharacter: async (anime) => {
      const response = await fetch(defaultUrl + "/create", {
        method: "POST",
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(anime),
      });
      const newAnime = await response.json();
      return newAnime;
    },

    getAllCharacters: async () => {
        const response = await fetch(defaultUrl + "/all-characters");
        const allCharacters = await response.json();
    
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

      updateAnime: async (anime) => {
        const response = await fetch(defaultUrl + "/update", {
          method: "PUT",
          headers: new Headers({ "Content-Type": "application/json" }),
          body: JSON.stringify(anime),
        });
    
        const characterUpdated = await response.json();
        return characterUpdated;
      },
    };
