export const getAllBuffers = async (bearerToken) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  return await fetch("buffer", requestOptions);
};
