import axios from "axios";

async function checkUser(token: string | null) {
  try {
    const res = await axios.get("https://d54757447b9c0307.mokky.dev/auth_me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
export default checkUser;
