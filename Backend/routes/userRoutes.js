const express = require('express');
const router = express.Router();
const {addUser, getUsers, getById,updateUser, deleteUser}  = require('../handlers/userHandler');


router.post('/users',async(req,res)=>{
    console.log(req.body);
     let user = await addUser(req.body);
    res.send(user)
});

router.get('/users',async(req,res)=>{
   let users  = await getUsers();
    res.send(users);
});
// getbyid() --
router.get('/users/:id',async(req,res)=>{
     let user = await getById(req.params['id']);
     res.send(user);
 });
// updateUser();
router.put('/users/:id',async(req,res)=>{
    console.log(req.params['id']);
   await updateUser(req.params['id'],req.body);
    res.send({});
}); 

router.delete('/users/:id',async(req,res)=>{
     await deleteUser(req.params['id']);
     res.send({});
});

module.exports = router;