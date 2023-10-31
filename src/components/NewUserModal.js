import React, { useEffect, useState } from 'react'
import BasicModal from './common/BasicModal/BasicModal'
import { Box, Input, TextField } from '@mui/material';
import { modalStyles } from './common/BasicModal/styles';
import CommonButton from './common/CommonButton/CommonButton';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const NewUserModal = ({open, handleClose, addNewUser}) => {

    const initialValues = {email:'', phoneNumber:'', userId:''}
    const [values, setValues] = useState(initialValues)

    const handleChange = (e) =>{
      const name = e.target.name;
      const val =e.target.value
      setValues((prevValues) => ({...prevValues, [name]:val}))
    }

    const getContent = () =>{
        return (
          <>
            <Box sx={modalStyles.inputs}>
              <TextField
                name="email"
                label="Email"
                required
                {...register("email")}
                error={errors.email ? true : false}
                helperText={errors.email?.message}
                value={values.email}
                onChange={handleChange}
              />
              <TextField
                name="phoneNumber"
                label="Phone number"
                required
                {...register("phoneNumber")}
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber?.message}
                value={values.phoneNumber}
                onChange={handleChange}
              />
              <TextField
                name="userId"
                label="User ID"
                required
                {...register("userId")}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message}
                value={values.userId}
                onChange={handleChange}
              />
            </Box>
          </>
        );
    }



    const validationSchema = Yup.object().shape({
      userId: Yup.string()
        .required('User ID is required')
        .min(6, "user id has to be minimum 6 characters"),
      email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email"),
      phoneNumber: Yup.string()
        .required("Phone is required")
        //  .matches(phoneRegex, "Phone number is not valid")
    })

    const {
      register,
      handleSubmit,
      formState:{errors}
    } = useForm({
      resolver:yupResolver(validationSchema)
    })

    const addUser = (data)=>{
      setValues(initialValues)
      handleClose()
      addNewUser(data)
    }

  return (
    <BasicModal
      open={open}
      handleClose={handleClose}
      title="Add new user"
      subTitle="Fill out the inputs and hit the 'submit'button"
      contents={getContent()}
      onSubmit={handleSubmit(addUser)}
    ></BasicModal>
  );
}

export default NewUserModal