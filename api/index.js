const app = require('express')()

module.exports = { path: '/api', handler: app }

app.get('/isopenning', (req, res) => {
  let currrentTime = (new Date( (new Date()).toUTCString() )).getHours() + 8 // Hong Kong

  if(currrentTime > 22 || currrentTime < 6) {
    return res.send({
      currentTime: currrentTime,
      utcTime: (new Date()).toUTCString(),
      status: "success",
      code: 0
    })
  } else {
    return res.send({
      currentTime: currrentTime,
      utcTime: (new Date()).toUTCString(),
      status: "fail",
      code: 1
    })
  }
})