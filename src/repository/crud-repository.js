import Tweet from "../models/tweet.js";

class crudrepo{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async destroy(id){
        try {
            const response = await this.model.findByIdAndDelete(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async get(id){
        try {
            const response = await this.model.findById(id);
            return response;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getall(){
        try {
            const response = await this.model.find({});
            return response;
        } catch (error) {
            throw error;
        }
    }

    async update(id,data){
        try {
            const response = await this.model.findByIdAndUpdate(id, data, {new : true});
            return response;
        } catch (error) {
            throw error;
        }
    }

}

export default crudrepo;