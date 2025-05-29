import conf from '../conf/conf.js'

import { Client, Account , ID, Databases , Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
        .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title , slug , content , featuredImage , status , userId }){

        try {

        }catch (error){

        }
}


}

const service = new Service();
export default service
