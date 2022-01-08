import { eventChannel } from "redux-saga";
import { call, take, put } from "redux-saga/effects";
import axios from "axios";

// API
class API {
  static getCountries() {
    return axios.get("https://restcountries.com/v3.1/all");
  }
}

//  countries channel, every 15 seconds will emit countries
function countriesChannel() {
  return eventChannel((emitter) => {
    const iv = setInterval(async () => {
      const { data } = await API.getCountries();
      emitter(data);
    }, 15000);
    return () => clearInterval(iv);
  });
}

function* countriesSagas() {
  const countriesChan = yield call(countriesChannel);
  const { data: countries } = yield call(API.getCountries);

  yield put({ type: "FETCHED_COUNTRIES", countries });
  try {
    while (true) {
      const countries = yield take(countriesChan);
      yield put({ type: "FETCHED_COUNTRIES", countries });
    }
  } finally {
    console.log("channel terminated");
  }
}

export default countriesSagas;
