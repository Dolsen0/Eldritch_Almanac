import axios from "axios";

export default function getStatus(req, res) {
  axios
    .get("https://www.hplovecraft.com/writings/texts/fiction/cc.aspx")
    .then((response) => {
      res.send(response.data);
    })
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
      console.log(error);
    });
}