const express = require('express');
const cors = require('cors')
const app = express();
const port = 8000;

require("./configs/mongoose.config") //put configs before routes 1

app.use(cors())
app.use(express.json()); //2
app.use(express.urlencoded({ extended: true })) //2

require("./routes/author.routes")(app);
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );
