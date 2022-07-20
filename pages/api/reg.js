const { Deta } = require('deta'); // import Deta

const deta = Deta('c0m1rbzu_uCRybF1QBq3p7uikjw1psp54rScJ3J2x');
const db = deta.Base('regs'); 




export default function handler(req, res) {
    let body=req.body;

    db.put(body)
    res.status(200).json(body)
  }
  