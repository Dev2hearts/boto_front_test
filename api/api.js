import express from "express";
const app = express();
import cors from "cors";

app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  if (req.body && req.body.data) {
    const searchData = req.body.data;
    const result = [`1번`, `2번`, `3번`, `4번`, `5번`];
    res.json(result);
  } else {
    res.json(["검색어를 입력해주세요"]);
  }
});

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});
