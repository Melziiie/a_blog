const query = require('../models/index')

// Register New User
exports.register = async function(req, res){
    let {userName, pword} = req.body
    if(!userName || !pword){
        return res.json("No Value!")
    }
    let exists =  await query("SELECT * FROM `users` WHERE `username` = ?", [userName])
  
    if (exists.length >0){
        res.json("Already exists")
    }else{
        let result = await query("INSERT INTO `users` (`username`, `password`) VALUES (?, ?)", [userName,pword])
        console.log("User created!")
        res.json(result)
    }
}

// User Login
exports.login = async function (req, res) {
    let {userName, pword} = req.body
    if(!userName || !pword){
        return res.json("No Value!")
    }

    let selection = await query("SELECT * FROM `users` WHERE `username` = ?  AND `password` = ?", [userName, pword]);
    if(selection >0){
       console.log('Login Successful!')
    }else{
        return res.json("Username or Password may be incorrect!")
    }
}

// Update user password
exports.update = async function (req, res) {
    let userName = req.body.user_id
    let pword = req.body.password
    
    let result = await query("UPDATE `users` SET `password` = ? WHERE `users`.`username` = ?", [pword, userName])
    console.log("Password updated!")
    res.send("Account updated!")
};

// // Delete user Account
exports.delete = async function(req, res){
    let userID = req.body.user_id

    let result = await query("DELETE FROM `users` WHERE `users`.`user_id` = ?;", [userID]);
    console.log("Account deleted!")

    res.json(result)
    res.send("Account deleted!")
};
