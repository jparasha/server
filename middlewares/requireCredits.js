module.exports =(req, res, next) =>{

    if(req.user.credits < 1) {
        return res.status (403).send ({error: 'Not enought credits !'});
        const { title, subject, body, recipients } = req.body;
    }
    next ();
};