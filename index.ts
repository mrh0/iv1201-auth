import http = require('http');

mongoose.connect("mongodb+srv://dbUser:"+process.env.MONGO_ATLAS_PW+"@cluster0.wqtf8.mongodb.net/auth?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    const port = process.env.PORT || 8080;
    const server = http.createServer(app);
    server.listen(port);
})





