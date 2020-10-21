const emailModel = require("../models/emailModel")
const express = require("express")
const bodyParser = require("body-parser")

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true}))

router.post("/email", (req, res) => {
      const email = req.body.email

      const newEmail = new emailModel({
            email: email
      })

      newEmail.save()
      .then(() => res.redirect("/"))
      .catch(err => (console.error(err), res.end()))
})

module.exports = router
