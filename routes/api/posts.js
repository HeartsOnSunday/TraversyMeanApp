const express = require("express");
const router = express.Router();

// @route GET api/posts/test --HEADERINFO
// @desc Tests post route --HEADERINFO
// @access Public  --HEADERINFO
router.get("/test", (req, res) => res.json({ msg: "Posts Works" }));

module.exports = router;

//routes/api/users is implied by the route
