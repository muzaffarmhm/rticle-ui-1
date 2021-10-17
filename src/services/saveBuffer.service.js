import Cookies from "js-cookie";
export const saveArticleToBuffer = async (body) => {
  // console.log("BODY", body);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${Cookies.get("token")}`);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
  };

  return await fetch("buffer", requestOptions);
};
