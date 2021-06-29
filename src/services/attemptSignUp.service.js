export const attemptSignUp = async (body) => {
  // console.log("BODY", body);
  var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "multipart/form-data");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: body,
  };

  const response = await fetch("user/register", requestOptions);

  if (response.status === 201) {
    alert("user created successfully");
  } else {
    alert("Invalid Email or Password");
  }
};
