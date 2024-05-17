import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, resp) => {
  resp.send( 'Hello World !');
});

app.listen(port,  () => {
  console.log( `Example app listening on port ${port}`)
})