export const getUserCount = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch("user/getCount", requestOptions);
  const responseJson = await response.json();
  return responseJson.count;
};

export const getArticlesCount = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch("article/getCount", requestOptions);
  const responseJson = await response.json();
  return responseJson.count;
};

export const getBufferCount = async () => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const response = await fetch("buffer/getCount", requestOptions);
  const responseJson = await response.json();
  return responseJson.count;
};
