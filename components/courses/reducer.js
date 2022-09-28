export function reducer(state, action) {
  switch (action.type) {
    case "input":
      return {
        ...state,
        input: { ...state.input, [action.payload.name]: action.payload.value },
      };

    case "checkbox":
      let isPresent = checkExistence(action.payload.name, state);
      if (!isPresent)
        return {
          ...state,
          treatments: [...state.treatments, action.payload.name],
        };
      let newArray = removeElement(action.payload.name, state.treatments);
      return {
        ...state,
        treatments: newArray,
      };

    case "submit":
      return {
        input: { name: "", email: "", phoneNumber: "" },
        treatment: [],
      };
  }
}

function checkExistence(value, state) {
  let array = state.treatments;

  for (let counter = 0; counter <= array.length; counter++) {
    if (array[counter] === value) {
      return true;
    }
  }

  return false;
}

function removeElement(value, array) {
  let newArray = array.filter((val, index, arr) => {
    return value !== val;
  });

  return newArray;
}
