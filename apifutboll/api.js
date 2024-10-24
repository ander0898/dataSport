var apiKey = "7603d2149a4f4460aefffc5921219a 1c";
var URL = "https://api.football-data.org/v4/matches";
var options = {
  method: "Get",
  headers: {
    "X-Auth-Token": apiKey,
  },
  mode: 'no-cors'
};
fetch(URL, options)
  .then((response) => {
    if (!response.ok) {
      console.error();
    }
    return console.log(response.json());
  })
  .catch((error) => {
    console.error(error);
  });
