const AuthorController = require("../controllers/author.controller")

module.exports =(app) =>{
    app.get("/api", AuthorController.testApi)
    app.get("/api/authors", AuthorController.allAuthors)
    app.get("/api/authors/:id", AuthorController.oneAuthor)
    app.post("/api/authors", AuthorController.addAuthor)
    app.put("/api/authors/:id", AuthorController.updateAuthor)
    app.delete("/api/authors/:id", AuthorController.deleteAuthor)
    }


