class Student {
    constructor(public _id: string, public FirstName: string, public LastName: string, public PhoneNumber: Number, public StateCode: string, public StateName: string ) {
        this._id = _id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.PhoneNumber = PhoneNumber;
        this.StateCode = StateCode;
        this.StateName = StateName;
    }
}

export default Student;