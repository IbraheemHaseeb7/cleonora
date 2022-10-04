export function reducer(state, action) {
  switch (action.type) {
    case "typing":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "submit":
      return {
        ...state,
        email: "",
        name: "",
        textarea: "",
        phoneNumber: "",
      };
  }
}
