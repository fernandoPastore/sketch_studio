
const isLogin = (req,res,next) => {

    const {user} = req.session

    if(!user){
        return res.redirect('/login')
    }

    //locals objeto do "res" que guardo variáveis globais.
    res.locals.user = user;

    return next()
}


module.exports = isLogin;