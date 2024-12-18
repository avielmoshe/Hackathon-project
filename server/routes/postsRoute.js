import express from "express";
import {
  crateNewPost,
  getAllPosts,
  // getPosts,
  // getPostById,
  // deletePostById,
  // getMyPosts,
  // likePost,
} from "../controllers/postController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/cratePost", verifyToken, crateNewPost);

router.get("/", getAllPosts);

// router.get("/myPosts", verifyToken, getMyPosts);

// router.get("/byId/:id", getPostById);

// router.delete("/byId/:id", verifyToken, deletePostById);

// router.put("/like/:id", verifyToken,likePost)

export default router;
