const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/users-controller');

// get/create user
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// get/update/delete user
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// add/remove friend
router
    .route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(removeFriend);

module.exports = router;