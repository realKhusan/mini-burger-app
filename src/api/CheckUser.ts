import axios from "axios";

async function checkUser(token: "string") {
  try {
    const res = await axios.get(
      "http://13.60.232.175:8080/api/customer/login",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export default checkUser;
