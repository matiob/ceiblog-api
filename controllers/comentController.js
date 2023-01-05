const ComentService = require("../services/comentService");


class ComentController{

 static async getComents(req, res, next){
    const coments = await ComentService.serviceGetComents(req, next);
    return coments ? res.status(200).json(coments) : res.sendStatus(404);
  };


  static async addComent(req, res, next){
    const coment = await ComentService.serviceAddComent(req, next);
    return coment ? res.status(201).json(coment) : res.sendStatus(404);
  };
  
}
module.exports= ComentController;