import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/healthCheck", (_req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
