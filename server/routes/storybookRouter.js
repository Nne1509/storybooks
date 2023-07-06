const express = require("express");
const router = express.Router();
const {
  getStories,
  createStory,
  searchStory,
  updateStory,
  deleteStory,
} = require("../controllers/storybookController");

router.route("/api/stories/create").post(createStory);

router.route("/api/stories").get(getStories);

router.route("/api/stories/:storyname").get(searchStory);

router.route("/api/stories/:story_id").put(updateStory);

router.route("/api/stories/:story_id").delete(deleteStory);

module.exports = router;
