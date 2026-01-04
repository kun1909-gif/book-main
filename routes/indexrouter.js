const express = require("express");
const router = express.Router();

const upload = require('../config/multer-config');

// Assuming you meant to import or define these controllers, here's an example:
const {
    homepageController,
    registerpageController,
    registerController,
    loginController,
    logoutController,
    profileController
} = require('../controllers/indexcontroller'); // Adjust the path if necessary

// Correct destructuring assignment
const { isloggedin, redirectifloggedin } = require("../middlewares/auth-middleware");

router.get("/", redirectifloggedin, homepageController);
router.get("/register", registerpageController);
router.get("/logout", logoutController);
router.get("/profile", isloggedin, profileController);

router.post("/register", upload.single('image'), registerController);
router.post("/login", loginController);

module.exports = router;
