const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.post("/api/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  res.json({
    success: true,
    message: "Registration Successful",
    user: {
      name,
      email,
    },
  });
});

app.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;

  res.json({
    success: true,
    token: "demo-token",
    user: {
      email,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});