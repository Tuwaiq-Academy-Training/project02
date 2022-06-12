let dataUsers = require("./data.json")
let dataGroups = require("./dataGro.json")
const express = require("express")
const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.get("/api/users", (req, res) => {
  let users = dataUsers.map(user => user)
  res.json(FindGroups)
})

app.get("/api/group/:Gid", (req, res) => {
  let FindGroups = dataGroups.find(Group => Group.Gid == req.params.Gid)
  res.json(FindGroups)
})

app.post("/api/group/:Gid", (req, res) => {
  let FindGroups = dataGroups.find(Group => Group.Gid == req.params.Gid)
  FindGroups.Message.push(req.body)
  res.json(FindGroups)
})

app.put("/api/group/update/:Gid/:Mid", (req, res) => {
  let FindGroups = dataGroups.find(Group => Group.Gid == req.params.Gid)
  let FindMessage = FindGroups.Message.find(mesaage => mesaage.id == req.params.Mid)
  // FindGroups.Message.push(req.body)
  FindMessage = req.body
  res.json(FindMessage)
})

app.delete("/api/group/delete/:Gid/:Mid", (req, res) => {
  let FindGroups = dataGroups.find(Group => Group.Gid == req.params.Gid)
  let FindMessage = FindGroups.Message.find(mesaage => mesaage.id == req.params.Mid)
  FindGroups.Message.filter(elm => elm.id !== req.params.Mid)

  res.json(FindGroups)
})

app.get("/api/privatemass/:sender/:responser", (req, res) => {
  res.json(dataUsers)
})

app.post("/api/privatemass/:sender/:responser", (req, res) => {
  let users = dataUsers.map(user =>
    Object.keys(user.Message).forEach(el => {
    // data = data.filter((elm)=> elm.name !== req.params.name);

    if (el == req.params.sender && user.id == req.params.responser) {
        user.Message[el].push(req.body)
    }
    if (el == req.params.responser && user.id == req.params.sender) {
        user.Message[el].push(req.body)
    }
    })
    )
  res.json(dataUsers)
})

app.delete("/api/privatemass/delete/:sender/:response", (req, res) => {
  //   let users = dataUsers.map(u => u.Message)
  let users = dataUsers.map(user =>
    Object.keys(user.Message).forEach(el => {
      if (el == req.params.sender && user.id == req.params.responser) {
        while (user.Message[el].length > 0) {
          user.Message[el].pop()
        }
      }
      if (el == req.params.responser && user.id == req.params.sender) {
        while (user.Message[el].length > 0) {
          user.Message[el].pop()
        }
      }
    })
  )
  res.json(dataUsers)
})

app.listen(3002, () => console.log("express is listening on port 3002"))
