import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send( 'Hello World !');
});

app.listen(port,  () => {
  console.log( `Example app listening on port ${port}`)
})