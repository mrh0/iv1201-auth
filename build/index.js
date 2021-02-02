"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var http = require("http");
mongoose.connect("mongodb+srv://dbUser:" + process.env.MONGO_ATLAS_PW + "@cluster0.wqtf8.mongodb.net/auth?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
exports.db = mongoose.connection;
exports.db.on('error', console.error.bind(console, 'connection error:'));
exports.db.once('open', function () {
    var port = process.env.PORT || 8080;
    var server = http.createServer(app);
    server.listen(port);
});
//# sourceMappingURL=index.js.map