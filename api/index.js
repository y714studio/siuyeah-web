const app = require('express')()

module.exports = { path: '/api', handler: app }

app.get('/isopenning', (req, res) => {
  let currrentTime = (new Date()).getHours()

  if(currrentTime > 22 || currrentTime < 6) {
    return res.send({
      currrentTime: currrentTime,
      status: "success",
      code: 0
    })
  } else {
    return res.send({
      currrentTime: currrentTime,
      status: "fail",
      code: 1
    })
  }
})