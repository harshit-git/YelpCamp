//"C:\Program Files\MongoDB\Server\4.0\bin\mongo.exe"
var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose'),
    passport   = require('passport'),
    session    = require('express-session'),
    cookieParser = require('cookie-parser'),
    localStrategy = require('passport-local'),
    flash      = require('connect-flash'),
    methodOverride = require('method-override'),
    Campground = require('./models/campground'),
    Comment    = require('./models/comment'),
    User       = require('./models/user')
    seedDB     = require('./seeds.js');
  
var campgroundRoutes = require('./routes/campgrounds'),
    commentRoutes    = require('./routes/comments'),
    indexRoutes       = require('./routes/index');

mongoose.connect("mongodb+srv://harshit:<happy>@cluster0-tvfpv.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true } );
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(methodOverride("_method"));
mongoose.set('useFindAndModify', false);
app.use(cookieParser('secret'));
app.use(flash());
//seedDB();

//PASSPORT CONFIG
app.use(require('express-session')({
    secret: "Saitama is the strongest",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.error       = req.flash("error");
    res.locals.success     = req.flash("success");
    next();
});

app.use(indexRoutes);
app.use('/campgrounds/:id/comments', commentRoutes);
app.use('/campgrounds', campgroundRoutes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);