import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {

    register() {
        return { message: "je suis inscrit sur nest js coocoo" }
    }

    login(){
        return { message: "je suis connecté sur nest js" }
    }
}


