import Student from "../classes/Student";

const API_URL = "http://108.235.200.16:10003";

function studentResponse(student: any) {
    const phonePartOne = student.PhoneNumber.toString().substring(0, 3);
    const phonePartTwo = student.PhoneNumber.toString().substring(3, 6);
    const phonePartThree = student.PhoneNumber.toString().substring(6, 10);
    const phoneString = `(${phonePartOne}) ${phonePartTwo}-${phonePartThree}`;
    return {
        _id: student._id,
        FirstName: student.FirstName,
        LastName: student.LastName,
        PhoneNumber: phoneString,
        StateCode: student.StateCode.StateCode,
        StateName: student.StateCode.StateName
    }

}

export async function getStudents(): Promise<any> {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const response = await fetch(`${API_URL}/student/get-all`, {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    });
    const result = await response.json();
    return result.map((student: { _id: string; FirstName: string; LastName: string; PhoneNumber: Number; StateCode: { StateCode: string; StateName: string } }) => {
        return studentResponse(student);
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
    return result.map((student: { _id: string; FirstName: string; LastName: string; PhoneNumber: Number; StateCode: { StateCode: string; StateName: string } }) => {
        return studentResponse(student);
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