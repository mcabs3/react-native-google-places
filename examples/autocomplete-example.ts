// tslint:disable: no-console

import { AutoCompleteSearch } from "../dist";
import { performSearch } from "./utils";

try {
  const apiKey = process.env.PLACES_API_KEY;
  if (!apiKey) {
    throw new Error("Missing PLACES_API_KEY env variable");
  }

  async function run() {
    try {
      const search = new AutoCompleteSearch();

      search.setApiKey(apiKey);
      search.set('input', "1600 Pennsylv").set('radius', 2000).set('language', 'en');

      const response: any = await search.exec();

      console.log('Example Autocomplete Prediction', response.predictions[0]);

    } catch (error) {
      console.log("Error", error);
    }
  }

  run();
} catch (error) {
  if (error.message === "Missing PLACES_API_KEY env variable") {
    console.log(error.message);
    console.log("\tTo run the example:");
    console.log("\tPLACES_API_KEY=<your_key_here> node places-example.js");
  } else {
    console.log(error);
  }
}
