const express = require('express')
const app = express()
app.use(express.json())
const port = 3000

const JSONdb = require('simple-json-db')
const db = new JSONdb('database.json')

app.post('/login', (req, res) => {
  // Get the password from the POST request body
  const inputPassword = req.body.password

  // Check if user supplied password == the database stored password
  if (inputPassword === db.get("admin")["password"]) {
    res.send("\nLogin Successful!\nWelcome, Admin.\n").status(200)
    // return res.send("\nLogin Successful!\nWelcome, Admin.\n").status(200)
  } else {
    res.send("\nWrong password!\nAcess denied!\n").status(401)
    // return res.send("\nWrong password!\nAcess denied!\n").status(401)
  }

  // Bug tracker counter - Will reset if code gets down to here,
  // but this should never run because we used res.send()... right?!?!
  db.set("bugTracker", 0);
})

app.listen(port, () => {
  console.log(`Bug-Free Software Corp. App listening on port 3000!`)
  console.log(`It's been ${db.get("bugTracker")} days since we've had a bug!`)
})