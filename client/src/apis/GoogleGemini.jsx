import axios from "axios";

async function GoogleGemini(message) {
  try {
    const response = await axios.post("http://localhost:3000/", {
      message: message,
    });
    return response.data.apireply;
  } catch (err) {
    console.log(err);
  }
}

export default GoogleGemini;
