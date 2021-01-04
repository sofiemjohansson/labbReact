import Employee from "./Employee";
import { useState } from "react";

function EmployeeList() {
    const [employees, setEmployees] = useState([
        {
            name: "Sofie Johansson",
            email: "sofiem.eriksson@gmail.com",
            phone: "070123456789",
            skills: "Specialistundersköterska inom multisjukdom hos äldre",
            avatar: "https://i.imgur.com/TUhCrsY.png",
        },
        {
            name: "Test",
            email: "test@gmail.com",
            phone: "070123456789",
            skills: "Javascript",
            avatar: "https://i.imgur.com/Q9qFt3m.png",
        },
        {
            name: "Test 2",
            email: "test2@gmail.com",
            phone: "070123456789",
            skills: "Javascript & HTML css ",
            avatar: "https://i.imgur.com/ebHfuth.png",
        },
    ]);
    function handleAddNewEmp() {
        setEmployees((prevState) => {
            return [
                ...prevState,

                {
                    name: "Geralt of Rivia",
                    email: "gearlt@gmail.com",
                    phone: "070000000",
                    skills: "java & python",
                    avatar: "https://i.imgur.com/t9HFQvX.png",
                },
            ];
        });
    }
    return (
        <div>
            <h3>Employeelist</h3>
            <button className="button" onClick={handleAddNewEmp}>Add employee</button>
            <div>
                {employees.map((employee) => (
                    <Employee EmployeesData={employee} />
                ))}
            </div>
        </div>
    );
}

export default EmployeeList;
