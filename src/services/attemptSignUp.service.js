export const attemptSignUp = async (body) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(body),
  };

  const response = await fetch("user/register", requestOptions);

  if (response.status === 201) {
    alert("user created successfully");
  } else {
    alert("Invalid Email or Password");
  }
};
