import React, { useState, useEffect } from 'react'
import DataTable from '../DataTable/DataTable'


const columns = [
  { field: "id", headerName: "User ID", width: 150 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "email", headerName: "Email", width: 250 },
  { field: "company", headerName: "Company", width: 250 },
  { field: "city", headerName: "City", width: 250 },
];

// const rows = [
//   { id: 1, col1: "Hello", col2: "World" },
//   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
//   { id: 3, col1: "MUI", col2: "is Amazing" },
// ];


const UsersTable = ({onFetchError}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const newUsers = data.map((user)=> {
                return {id:user.id, name:user.name, company:user.company.name, email:user.email, city: user.address.city}
            })
            setUsers(newUsers)
        })
        .catch(() => onFetchError())
    }, [])

  return (
    <DataTable rows={users} columns={columns} loading={!users.length}/>
  )
}

export default UsersTable