export const getUserInfo = async (bearerToken) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch("user/user-info", requestOptions);
  return response.json();
};
