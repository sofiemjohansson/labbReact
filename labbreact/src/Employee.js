function Employee({ EmployeesData }) {
    return (
        <div className="EmployeeDiv">
            <div>
                <img className="avatar"
                    src={EmployeesData.avatar}
                    alt="avatar-img"
                />
            </div>
            <div>
                <h2>{EmployeesData.name}</h2>
                <p>
                    <strong>Email: </strong>
                    {EmployeesData.email}
                </p>
                <p>
                    <strong>Phone: </strong>
                    {EmployeesData.phone}
                </p>
                <p>
                    <strong>Skills: </strong>
                    {EmployeesData.skills}
                </p>
            </div>
        </div>
    );
}
export default Employee;