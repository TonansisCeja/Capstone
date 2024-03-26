const API_URL = "https://fakestoreapi.com";

// creating a function called login it's async because it's a fetch and we
// use username and password as parameters becuase that's what we want
// from the user.
export const login = async (username, password) => {
  try {
    //create constant response which will be assigned the result from
    //the fetch. It's await because we need to wait for the result before
    //it continues. it fetching from this URL https://fakestoreapi.com/auth/login
    // method is POST because are sending. Header tell the server what
    //we are sending. we are sending application.json. only need header
    //when you are sending data. What we are sending is place in th
    //body . You only need a header in POST, PATCH and UPDATE. need header
    //becuase we are sending back json data. We are send pack what the user
    // in username and password.
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    // the results are assigned to result.
    const result = await response.json();

    //since it returns an object and you only want the token then
    //you return result.token
    return result.token;
  } catch (error) {
    console.error("Error /Login User", error);
  }
};

export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error Getting All Products", error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Theres was an error /Get single product ", error);
  }
};
