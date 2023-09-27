const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const reviewRoutes = require('./routes/reviewRoutes');

app.use(bodyParser.json());

app.use('/api', reviewRoutes);

const port = 3001; 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
