export class UserService {
    public getUsers(): Array<any> {
        return [
            { firstName: "Hung", lastName: "To", avatar: "01.jpg" },
            { firstName: "Thu", lastName: "Ton", avatar: "02.jpg" },
            { firstName: "Hai", lastName: "Nguyen", avatar: "03.jpg" }
        ];
    }
}