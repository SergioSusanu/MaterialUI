import React from 'react'
import BasicCard from '../components/common/BasicCard/BasicCard';
import CardSearchHeader from '../components/common/BasicCard/CardSearchHeader';
import CardContentAuth from '../components/common/BasicCard/CardContentAuth';
import GridWrapper from '../components/common/GridWrapper/GridWrapper';
import BasicModal from '../components/common/BasicModal/BasicModal';
import NewUserModal from '../components/NewUserModal';

const Authentication = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenModal = () => setOpen(true);
    const handleCloseModal = () => setOpen(false);

  return (
      <GridWrapper>
        <BasicCard
          header={<CardSearchHeader handleClick={handleOpenModal}/>}
          content={<CardContentAuth />}
        />
        <NewUserModal open={open} handleClose={handleCloseModal} />
      </GridWrapper>
  );
}

export default Authentication