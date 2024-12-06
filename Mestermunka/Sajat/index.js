const express = require('express')
const app = express()
const usersRouter = require('./routes/users');

const port = 3000

app.use('/users', usersRouter);

app.get('/', (req, res) => {
  res.send('MenhelyTérkép API 1.0.0')
})

app.listen(port, () => {
  console.log(`A menhelyterkep api figyel a ${port} porton!`)
})