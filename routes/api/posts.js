const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Post Model
const Post = require("../../models/Post");
//Profile Model
const Profile = require("../../models/Profile");

//Validation
const validatePostInput = require("../../validation/post");

// @route GET api/posts/test --HEADERINFO
// @desc Tests post route --HEADERINFO
// @access Public  --HEADERINFO
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

// @route POST api/posts/ --HEADERINFO
// @desc CREATE post --HEADERINFO
// @access PRIVATE  --HEADERINFO

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePostInput(req.body);

    //Check Validation
    if (!isValid) {
      // if errors exist send 400 with errors object
      return res.status(400).json(errors);
    }

    const newPost = new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id
    });

    newPost.save().then(post => res.json(post));
  }
);

module.exports = router;

//routes/api/users is implied by the route
