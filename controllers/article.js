const query = require('../models/index')

// // Create and Save a new Article
exports.create = async function(req, res){
    let articleName = req.body.article_name
    let articleText = req.body.article_text

    let result = await query("INSERT INTO `articles` (`article_id`, `article_name`, `article_text`) VALUES (NULL, ?, ?)", [articleName,articleText])
    // .catch((err)=>{
    //     console.log('code is dead')
        
    //     console.log(err)
    // })
    console.log("Article ? created!", [req.params.article_id])
    res.json(result)
}

// Retrieve and return all Articles from the database.
exports.findAll = async function (req, res) {
    let userName = res.body.username
    let result = await query("SELECT * FROM `users` LEFT JOIN article_control ON users.user_id = article_control.user_id LEFT JOIN articles ON article_control.article_id = articles.article_id where users.username = ?", [userName]);
    console.log("Search complete")
    res.json(result)
}

// Find a single Article with a ArticleId
exports.findOne = async function (req, res){
    let {userName,searchQ} = req.body

    let result = await query("SELECT * FROM `users` LEFT JOIN article_control ON users.user_id = article_control.user_id LEFT JOIN articles ON article_control.article_id = articles.article_id WHERE users.username = ? AND( articles.article_name OR articles.article_text LIKE %?% )", [userName,searchQ]);
    console.log("Search complete")
    res.json(result)
};

// Update a Article identified by the ArticleId in the request
exports.update = async function (req, res) {
    let articleName = req.body.article_name
    let articleText = req.body.article_text
    let articleID = req.body.article_id
    
    let result = await query("UPDATE `articles` SET `article_name` = ?, `article_text` = ? WHERE `articles`.`article_id` = ?", [articleName, articleText, articleID])
    console.log("Article ? updated!", [req.params.article_id])
    res.json(result)
    res.send("Article updated!")
};

// // Delete a Article with the specified ArticleId in the request
exports.delete = async function(req, res){
    let articleID = req.body.article_id

    let result = await query("DELETE FROM `articles` WHERE `articles`.`article_id` = ?;", [articleID]);
    console.log("Article ? deleted!", [req.params.article_id])
    res.json(result)
    res.send("Article deleted!")
};
