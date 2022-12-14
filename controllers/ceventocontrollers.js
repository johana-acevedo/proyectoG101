import { evento} from '../models/evento.js';


//registrar un evento
export	const regevento= (req,res)=> {
    const  cevento = evento(req.body) ;
    cevento
      .save()
      .then((data)=>res.json(data))
      .catch ((error)=>res.json({ message: error}));
  };

//mostrar los eventos deportivos
export const sheventos = (req,res) => {
   
  evento
  .find()
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));

};

//mostrar un evento deportivo
export const shevent = (req,res) => {
  const { id } = req.params;
  evento
  .findById (id)
  .then((data)=> res.json(data))
  .catch((error)=>res.json({message:error}));
};


//borrar un evento deportivo
export const delevent = (req,res)=> {
  const {id}=req.params;
  evento
  .deleteOne({_id:id})
  .then((data)=>res.json(data))
  .catch((error)=>res.json({message:error}));
 }



//actualizar un evento deportivo
export const upevent = (req, res) => { 
  const { id } = req.params;
  const{ fecha, equipo1, equipo2,marcador1,marcador2,tipoevento } = req.body;
  evento
   .updateOne({ _id: id }, { $set: { fecha, equipo1, equipo2,marcador1,marcador2,tipoevento} })
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error}));
};

export default regevento;
