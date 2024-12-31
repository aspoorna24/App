const express = require("express");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 8000;

app.get('/message', (req, res) => {
    res.json({ message: "Prajna" });
});

app.listen(PORT, ()=> console.log(`Server Started at PORT ${PORT}`));

