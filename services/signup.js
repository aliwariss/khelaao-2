import axios from "axios";

const baseUrl = "http://192.168.18.46:5000";

const signUp = async (credentials) => {
  const response = await axios.post(baseUrl, credentials);
  return response.data;
};

const login = async (phoneNumber) => {
  console.log("responseFn Ran");
  const response = await axios.get(
    `${baseUrl}/players/phoneNumber/${phoneNumber}`
  );
  // console.log("responseFn", response);
  return response;
};

const getAllData = async () => {
  const response = await axios.get(`${baseUrl}/players`);
  // console.log("responseFn", response);
  return response.data;
};

export default { signUp, login, getAllData };
// fetch("http://192.168.18.46:5000/players")
//       .then((resp) => resp.json())
//       .then((res) => {
//         res.map((elem) => {
//           console.log(elem.personalInformation.phoneNumberr);
//         });
//       })
//       .catch((error) => console.error(error));