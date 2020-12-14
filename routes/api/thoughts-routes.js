const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    addThought,
    removeThought,
    addReaction,
    removeReaction,
    updateThought
  } = require('../../controllers/thoughts-controller');

// add a thought
router
  .route('/:userId')
  .post(addThought);

// get all thoughts
router
  .route('/')
  .get(getAllThoughts)

router
  .route('/:thoughtId')
  .put(updateThought)

// update thought
router
    .route('/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

// add reaction
router
  .route('/:thoughtId/reactions')
  .post(addReaction)

// remove thought
router
  .route('/:userId/:thoughtId')
  .delete(removeThought)

// delete reaction 
router
    .route('/:thoughtId/:reactionId/deleteReaction')
    .delete(removeReaction);

module.exports = router;