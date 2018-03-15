const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../config/keys');
const mongoose = require('mongoose');
const User = mongoose.model('users');


passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        //console.log(accessToken);
        //console.log(refreshToken);
        //console.log(profile);
        User.findOne({googleId:profile.id})
        .then((existingUser) =>{
            if(existingUser){
                //user exist
                console.log(profile.id+' Already Registered!');
                done(null, existingUser);
            }
            else{
                new User({googleId: profile.id , name: profile.displayName})
                .save()
                .then(user => done(null, user))
                .catch((error)=>{
                    console.log(error);
                });
            }
        })   
        
    }));