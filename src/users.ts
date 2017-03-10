import { Component } from "@angular/core";

@Component({
    templateUrl: "src/users.html"
})

export class Users {
    private users: any = [
        { firstName: "Hung", lastName: "To", avatar: "01.jpg" },
        { firstName: "Thu", lastName: "Ton", avatar: "02.jpg"  },
        { firstName: "Hai", lastName: "Nguyen", avatar: "03.jpg"  }
    ]
}