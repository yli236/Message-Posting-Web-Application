export class User{
    constructor(public email: string,
                public password: string,
                public firstname?: string, /*making these two*/ 
                public lastname?: string){}/* optional */    
}