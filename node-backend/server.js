const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const reviewRoutes = require('./routes/reviewRoutes');

app.use(bodyParser.json());

const corsOptions = {
    origin: 'http://localhost:3000', 
  };

app.use(cors(corsOptions));



app.use('/api', reviewRoutes);

const port = 3001; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
