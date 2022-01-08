import produce from "immer";

const initialState = {
  countries: [],
  isLoading: false,
};

const countriesReducer = produce((draft, action) => {
  switch (action.type) {
    case "FETCHED_COUNTRIES": {
      // sorting countries, updating the draft
      draft.countries = action.countries.sort((a, b) => {
        const aName = a.name.common;
        const bName = b.name.common;
        if (bName > aName) {
          return -1;
        }
        if (aName > bName) {
          return 1;
        }
        return 0;
      });
      break;
    }
    default: {
      return draft;
    }
  }
}, initialState);

export default countriesReducer;
