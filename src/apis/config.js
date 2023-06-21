import axios from "axios";

const token = import.meta.env.VITE_MOVIEAPI_TOKEN;
const config = {
  headers: { Autherization: `Bearer ${token}` },
};

async function get() {
  const configUrl = "https://api.themoviedb.org/3/configuration";
  try {
    const result = fetch(configUrl, {
      method: "GET",
      headers: {
        Autherization: `Bearer ${token}`,
      },
      mode: "no-cors",
    })
      .then((res) => res.json())
      .then((res) => console.log(res));

    // const result = await axios.get(configUrl, {
    //   headers: {
    //     Autherization: `Bearer ${token}`,
    //     Accept: "application/json",
    //   },
    // });
  } catch (err) {
    throw err;
  }
  //   return result;
}

export { get };
