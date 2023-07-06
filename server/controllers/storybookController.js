const asyncHandler = require("express-async-handler");
const storybooks = require("../models/storybookModels");
//@desc create stories
//route POST /api/stories/create
//@access public

const createStory = asyncHandler(async (req, res) => {
  const { story } = req.body;
  if (!story) {
    return res.status(400).json({ message: `Please write a story` });
  }
  const newStory = await storybooks.create({ story });
  return res.status(201).json(newStory);
});

//@desc retrieve stories
//@route GET /api/stories
//@access public

const getStories = asyncHandler(async (req, res) => {
  const stories = await storybooks.find();
  res.status(200).json(stories);
});

//desc retrieve story
//route GET /api/stories/:storyname
//@access public

const searchStory = asyncHandler(async (req, res) => {
  const { title } = req.params;
  if (!title) {
    res.status(400).json({ message: "Title of story is required" });
  }
  res.status(200).json({ message: `Get story: ${req.params.title}` });
});

//desc edit story
//route PUT /api/stories/:story_id
//@access public

const updateStory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update story ${req.params.story_id}` });
});

//desc delete story
//route DELETE /api/stories/:story_id
//@access public

const deleteStory = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete story ${req.params.story_id}` });
});
module.exports = {
  getStories,
  createStory,
  searchStory,
  updateStory,
  deleteStory,
};
