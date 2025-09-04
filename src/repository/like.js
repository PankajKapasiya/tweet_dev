import like from '../models/like.js';

import crudrepo from './crud-repository.js';

class likerepo extends crudrepo{

    constructor(){
        supre(like);
    }
    
    async findByUserAndLikeable(data) {
        try {
            const like = await Like.findOne(data);
            return like;
        } catch(error) {
            throw error;
        }
    }
}

export default likerepo;