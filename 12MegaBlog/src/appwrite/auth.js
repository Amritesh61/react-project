import conf from '../conf/conf.js'

import { Client, Account , ID} from "appwrite";

export class AuthService {
    client = new Client();
    account ;

constructor() {
    this.client
        .setEndpoint(conf.appwriteUrl) // Your Appwrite Endpoint
        .setProject(conf.appwriteProjectId); // Your Appwrite Project ID
    this.account = new Account(this.client);    
    }

    async createAccount({ email , password , name}){
        try{
            await this.account
                .create(ID.unique() , email, password, name);
                if(userAccount){
                    return userAccount;
                }else {
                    return
                }

        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default AuthService;