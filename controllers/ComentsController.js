const {Comentario, User} = require('../models');


const ComentsController = {
    showComentsPage: async(req,res)=> {
        try{ 

            const comentarios = await Comentario.findAll({include:"comentador"})
            console.log(comentarios)
            res.render('comentsPage',{comentarios})
        }catch(erro){
            console.log(erro)
        }
    },
    writeComent:async(req,res)=>{
        try{
            const {texto} = req.body

            const {id} = req.session.user

            const comentario = await Comentario.create({users_id:id, texto})

            return res.redirect('/comentsPage')
            
        }catch(erro){
            console.log(erro)
        }
    }
}

module.exports = ComentsController