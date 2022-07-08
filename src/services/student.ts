const API_URL = "http://108.235.200.16:10003";

export async function getStudents(): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`${API_URL}/student/get-all`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    const result = await response.json();
    return result.map((student: { _id: string; FirstName: string; LastName: string; PhoneNumber: Number; StateCode: {StateCode: string; StateName: string }}) => {
        return {
            _id: student._id,
            FirstName: student.FirstName,
            LastName: student.LastName,
            PhoneNumber: student.PhoneNumber,
            StateCode: student.StateCode.StateCode,
            StateName: student.StateCode.StateName
        }
    });
}

export async function getStudent(id: string): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`${API_URL}/student/get?id=${id}`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    const result = await response.json();
    return result.map((student: { _id: string; FirstName: string; LastName: string; PhoneNumber: Number; StateCode: {StateCode: string; StateName: string }}) => {
        return {
            _id: student._id,
            FirstName: student.FirstName,
            LastName: student.LastName,
            PhoneNumber: student.PhoneNumber,
            StateCode: student.StateCode.StateCode,
            StateName: student.StateCode.StateName
        }
    });
}

export async function createStudent(student: any): Promise<any> {
const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`${API_URL}/student/create`, {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(student),
        redirect: 'follow'
    });
    return await response.json();
}