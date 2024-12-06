export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data: action.payload,
            };
        case "TOGGLE_THEME":
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light",
            };
        case "ADD_FAV":
            console.log("State.data antes de actualización: ", state.data)
            const updatedData = state.data.map((dentist) => 
                dentist.id === action.payload.id
                ? {
                    ...dentist,
                    favorite: !dentist.favorite}
                : dentist
            )
            console.log("State.data despues de actualización: ", updatedData);

            if (updatedData && updatedData.length > 0) {
                const favorites = updatedData.filter((dentist) => dentist.favorite)
                localStorage.setItem("favorites", JSON.stringify(favorites))
            }
            return {
            ...state,
            data: updatedData
        }
        
        
        default:
            throw new Error("Acción no existente");
    }

}