import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileUpload from './components/Smaple';
import CsvUploader from './components/CsvUploader';

function App() {
  return(
      <>
      <CsvUploader/>
      </>
  );
  // State to hold the list of employees
  // const [employees, setEmployees] = useState([]);
  // const [newEmployee, setNewEmployee] = useState({
  //   employee: '',
  //   department: ''
  // });

  // // Fetch employee data from the Django backend
  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/') // URL of your Django API
  //     .then(response => {
  //       setEmployees(response.data); // Set the employee data
  //     })
  //     .catch(error => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  // // Handle form submission to add new employee
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   axios.post('http://127.0.0.1:8000/', newEmployee) // URL of your Django API
  //     .then(response => {
  //       setEmployees([...employees, response.data]); // Update the employee list
  //       setNewEmployee({ employee: '', department: '' }); // Reset the form
  //     })
  //     .catch(error => {
  //       console.error('Error posting data:', error);
  //     });
  // };

  // // Handle form input changes
  // const handleChange = (e) => {
  //   setNewEmployee({
  //     ...newEmployee,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // return (
  //   <div className="App">
  //     <h1>Employees</h1>
  //     <ul>
  //       {employees.map((emp, index) => (
  //         <li key={index}>
  //           {emp.employee} - {emp.department}
  //         </li>
  //       ))}
  //     </ul>

  //     <h2>Add a New Employee</h2>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="employee"
  //         placeholder="Employee Name"
  //         value={newEmployee.employee}
  //         onChange={handleChange}
  //       />
  //       <input
  //         type="text"
  //         name="department"
  //         placeholder="Department"
  //         value={newEmployee.department}
  //         onChange={handleChange}
  //       />
  //       <button type="submit">Add Employee</button>
  //     </form>
  //   </div>
  // );
}

export default App;
