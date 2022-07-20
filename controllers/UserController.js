const bcrypt = require('bcrypt');
const {User} = require('../models');

const UserController = {
    showEditPage: async(req,res)=> {
        try{
            let user = await User.findByPk(req.session.user.id);

            const {senha} = req.session.user;

            user.senha = bcrypt.compareSync(senha, user.senha);
            
            return res.render('editPage', {user});

        }catch(erro){
            console.log(erro);
        }
    },
    editUser: async(req, res) => {
        try{
        const {nome, email, senha, telefone} = req.body

        const hash = bcrypt.hashSync(senha,10)

        const {id} = req.session.user

        const user = await User.update({
            nome,
            email, 
            senha:hash,
            telefone,
        },
        {
            where:{id}

        });

        return res.redirect('/homePage');

        }catch (erro) {
            console.log(erro)
        }
    },  
    showContentPage: (req,res)=> {
        res.render('contentPage')
    },  
    createStudio: (req,res)=> {

        const {largura,comprimento,altura} = req.body

        let studio = {largura,comprimento,altura};

        req.session.studio = studio

        res.send(req.session.studio)
    },
    showComentsPage: (req,res)=> {
        res.render('comentsPage')
    }
}

module.exports = UserController;