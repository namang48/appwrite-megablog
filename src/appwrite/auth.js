import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";


// By this method of implementation , we can switch from one Service to another by changing only few lines of codes in constructor and create account section


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try{
            const userAccount = await this.account.create(ID.unique(),email,password,name);
            if (userAccount) {
                // Call another method
                this.login({email,password});
                return userAccount
            }
        }catch(error){
            // console.log("Appwrite Service :: createAccount :: error ", error);
            throw error;
        }
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            // console.log("Appwrite Service :: login :: error ", error);
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Service :: getCurrent User :: error ", error);
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite Service :: Logout Error :: Error ",error);
        }
    }
}

const authService = new AuthService();

export default authService;













// const client = new Client()
//     .setEndpoint(`${conf.appwriteUrl}`)                   // Your API Endpoint
//     .setProject(`${conf.appwriteProjectId}`);             // Your project ID

// const account = new Account(client);

// const user = await account.create(
//     ID.unique(), 
//     'email@example.com', 
//     'password'
// );
