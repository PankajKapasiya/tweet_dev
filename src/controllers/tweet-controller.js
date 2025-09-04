import { tweetService } from '../service/index.js';

const tweetservice = new tweetService();

export const create = async (req,res)=>{
    try {
        const response= await tweetservice.create(req.body);
        return res.status(201).json({
            success :'true',
            message :'succesfullly created',
            err :{},
            data : response
        });
    } catch (error) {
        return res.status(500).json({
            success :'false',
            message : 'unable to create',
            err : error,
            data : {}
        })
    }
}