const express = require('express');
const app = express();
const userRouter = require('./routes/user.routes');
const itemRouter = require('./routes/item.routes');

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api', userRouter);
app.use('/api', itemRouter);

app.listen(PORT, ()=>{
    console.log('Server is running'); 
});
