export const getProfileImg = async (bearerToken) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);
  myHeaders.append("Content-Type", "image/jpeg");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "no-cache",
  };

  const response = await fetch("user/profile-img", requestOptions);
  return await response.text();
};
