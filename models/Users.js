const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/.+@.+\..+/]
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thoughts'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Users'
            }
        ],
    }, 
    {
        toJSON: {
          virtuals: true,
        },
        id: false
    }
);


// get the total count of Friends
UsersSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the Users model
const Users = model('Users', UsersSchema);

// export the users model
module.exports = Users;