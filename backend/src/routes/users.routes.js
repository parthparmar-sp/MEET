// import { Router } from "express";
// import { login, register } from "../controller/user.controller.js";



// const router = Router();

// router.route("/login").post(login)
// router.route("/register").post(register)
// router.route("/add_to_activity")
// router.route("/get_all_activity")

// export default router
import { Router } from "express";
import { login, register, getUserHistory, addToHistory } from "../controller/user.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory); // Attach the controller function
router.route("/get_all_activity").get(getUserHistory); // Assuming this is needed

export default router;
