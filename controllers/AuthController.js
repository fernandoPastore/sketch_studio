const bcrypt = require('bcrypt');
const {User} = require('../models');

const AuthController = {
    showRegistro:(req,res)=> {
        res.render('registro')
        },
    
    Registrar: async(req,res)=>{
            try {
                const {nome, email, senha} = req.body;
    
                const hash = bcrypt.hashSync(senha,10);
    
                const verificarUsuarioCadastrado = await User.findOne({where: {email:email}});
                
                if(verificarUsuarioCadastrado){
    
                    return res.render('registro', {erro:"Não foi possível realizar o Cadastro", old: req.body})   
                }
            
                const newUser = await User.create(
                    {
                        nome,
                        email,
                        senha: hash,
                    })
    
            return res.redirect('/login')
    
            } catch (error){
                console.log(error)
            }
            
        },
        
    showLogin: (req,res)=> {
           res.render('login.ejs',{})
        },
    
    Login: async (req,res)=> {
            try{
            const {email,senha} = req.body
    
            let user = await User.findOne({where: {email: email}})
    
            if(!user || bcrypt.compareSync(senha,user.senha)){
                return res.render('login', {error:'Usuário e senha incorretos ou não existe'})
            }

            req.session.user = user

            res.redirect('/homePage')
            }catch (error){
                console.log(error)
            }
    
        },
    
    showResetSenha:(req,res)=> {
            res.render('resetSenha')
        },
    
    showHomePage: (req,res)=> {
            res.render('homePage')  
        },
}

module.exports = AuthController;