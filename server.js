var fs = require('fs');
var koa = require('koa');
var serve = require('koa-static');
var app = koa();

const PORT = 3000;

var indexPath = `${__dirname}/index.html`;

app.use(serve('.'));
app.use(serve('./images'));
app.use(serve('./node_modules'));

app.listen(PORT);
