import { db } from "../connect.js";

export const getKey = (req,res) => {
      const keyId = req.params.key_id;
    const q = `SELECT * FROM social.keys`
    db.query(q, [keyId], (err,data) => {
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    })
}

export default getKey