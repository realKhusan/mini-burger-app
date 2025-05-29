import mainApi from "./Request";

async function checkUser(token: string | null) {
  try {
    const res = await mainApi.get("/auth_me", {
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
