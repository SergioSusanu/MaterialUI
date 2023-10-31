import React, { useState } from 'react'
import BasicCard from '../components/common/BasicCard/BasicCard';
import CardSearchHeader from '../components/common/BasicCard/CardSearchHeader';
import CardContentAuth from '../components/common/BasicCard/CardContentAuth';
import GridWrapper from '../components/common/GridWrapper/GridWrapper';
import BasicModal from '../components/common/BasicModal/BasicModal';
import NewUserModal from '../components/NewUserModal';

const Authentication = () => {
    const [open, setOpen] = React.useState(false);
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState(users)
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

    const addNewUser = (data) => {
     users.push({...data})
    }

    const filterUsers = (data) => {
      const searchTerm = data.toString().toLowerCase().trim()
      if (searchTerm === '') {setFilteredUsers(users)}
      else {
        const filteredData = users.filter((user) => {
          return Object.keys(user).some((key) =>
          user[key].toString().toLowerCase().includes(searchTerm))
        })
        setFilteredUsers(filteredData)
      }
    }

  return (
      <GridWrapper>
        <BasicCard
          header={<CardSearchHeader handleClick={handleOpenModal}
          handleSearch={filterUsers}
          />}
          content={<CardContentAuth users={filteredUsers}/>}
        />
        <NewUserModal open={open} handleClose={handleCloseModal}
        addNewUser={addNewUser} />
      </GridWrapper>
  );
}

export default Authentication