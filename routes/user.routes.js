import express from "express";

// import all the controllers

import {
  createUser,
  getAllUsers,
  getUserInfoByID,
} from "../controllers/user.controller.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.route("/").post(createUser);
router.route("/:id").get(getUserInfoByID);

export default router;
