class Employee {

    constructor(_id,
                fullname,
                birthday,
                salary,
                percentCommission,
                idPosition,
                zipcode,
                street,
                number,
                city,
                state)
    {
        this._id      = _id;
        this.fullname = fullname; 
        this.birthday = birthday;
        this.salary = salary;
        this.idPosition = idPosition;
        this.zipcode = zipcode;
        this.street = street;
        this.number = number;
        this.city = city;
        this.state = state;
        this.percentCommission = percentCommission;
    }

    getSalary(){
        return this.salary * ((this.percentCommission / 100) + 1)
    }

    getNickname(){
        return this.fullname.substring(0,this.fullname.indexOf(" "));
    }

    getEmployee(){

        return {
            "_id": this._id,
            "fullname": this.fullname,
            "nickname": getNickname(),
            "birthday": this.birthday,
            "salary": getSalary(),
            "idPosition": this.idPosition,
            "zipcode": this.zipcode,
            "street": this.street,
            "number": this.number,
            "city": this.city,
            "state": this.state
        }
    }
}