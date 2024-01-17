const app = require('./src/app')

app.listen(process.env.PORT, ()=>{
    console.log(`App is started on ${process.env.PORT} port`);
})