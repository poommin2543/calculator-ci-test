const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ตัวอย่าง API บวกเลข
app.get('/add', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.send({ result: a + b });
});

app.get('/', (req, res) => {
  res.send('Hello from calculator CI/CD demo!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
