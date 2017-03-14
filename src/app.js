import express from 'express';

let app = express();
let port = 3000;

app.post('/graphql', (req, res) => {
  res.send('hi');
});

app.listen(port, () => {
  console.log(`GraphQL Listening On ${port}`);
});
