export const reducer = (state, action) => {
    switch (action.type) {
        case "GET_DATA":
            return {
                ...state,
                data: action.payload,
            };
        default:
            throw new Error("Acción no existente");
    }
    
}