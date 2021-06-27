export const attemptLogin = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
  };

  const response = await fetch("user/login", requestOptions);

  if (response.status === 200) {
    console.log(response);
  } else {
    alert("Invalid Email or Password");
  }
};
