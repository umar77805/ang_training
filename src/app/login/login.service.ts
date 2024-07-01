import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root'})
export class LoginService {
    private validUsers = [
        {
            email: "test1@gmail.com",
            password: "password"
        },
        
        {
            email: "test2@gmail.com",
            password: "password"
        },
        {
            email: "test3@gmail.com",
            password: "password"
        },

    ];

    login(loginData: { email: string, password: string }) {
        return this.validUsers.some((user) => {
            return user.email === loginData.email && user.password === loginData.password;
        });
    }
}