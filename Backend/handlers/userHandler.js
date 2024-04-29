const User = require('../db/user');
async function addUser(userModel) {
        let user = new User({
            ...userModel,
        });

        await user.save();

        return user.toObject();    
};

async function getUsers(){
   const users = await User.find();
   return users.map(x=> x.toObject());
}

async function getById(id){
    const getuser = await User.findById(id);
    return getuser.toObject();
}

async function updateUser(id,userModel){
    const filter = {_id : id};
    await User.findOneAndUpdate(filter,userModel);
}

async function deleteUser(id){
    await User.findByIdAndDelete(id);
}

module.exports = {addUser,getUsers,getById,updateUser,deleteUser} ;
