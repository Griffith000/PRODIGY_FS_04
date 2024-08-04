const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const axios = require("axios");
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": process.env.PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(500).json({ error: "An unexpected error occurred" });
  }
});

PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
