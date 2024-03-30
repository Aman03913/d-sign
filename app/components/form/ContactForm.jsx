"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    type: "",
    reason: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Card className='text-center bg-slate-50 justify-center  '>
      <CardBody className='flex text-center items-center justify-center'>
       

        <form
          onSubmit={handleSubmit}
          className='flex flex-col space-y-4 mt-4 w-full md:w-96 mx-auto'
        >
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-indigo-500  to-blue-500 bg-clip-text text-transparent  '>
          Contact Us
        </h1>
        <p className='text-center text-secondary'>
          Please fill out the form below and we will get back to you as soon as
          possible.
        </p> 
          <div className='mb-4'>
            <Input
              variant='bordered'
              type='text'
              label='Name'
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              color='secondary'
              required
            />
          </div>
          <div className='mb-4'>
            <Input
              type='email'
              label='Email'
              id='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              variant='bordered'
              color='secondary'
              required
            />
          </div>
          <div className='mb-4'>
            <Input
              type='tel'
              label='Phone Number'
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              variant='bordered'
              color='secondary'
            />
          </div>
          <div className='mb-4'>
            <Input
              label='Country'
              type='text'
              id='country'
              name='country'
              value={formData.country}
              onChange={handleChange}
              variant='bordered'
              color='secondary'
            />
          </div>
          <div className='mb-4'>
            <Select
              label='  Individual/Enterprise'
              id='type'
              name='type'
              value={formData.type}
              onChange={handleChange}
              variant='bordered'
              color='secondary'
            >
              <SelectItem value=''>Select One</SelectItem>
              <SelectItem value='individual'>Individual</SelectItem>
              <SelectItem value='enterprise'>Enterprise</SelectItem>
            </Select>
          </div>
          <div className='mb-4'>
            <Textarea
              label='Reason for Contact'
              id='reason'
              name='reason'
              value={formData.reason}
              onChange={handleChange}
              variant='bordered'
              rows='4'
              color='secondary'
            ></Textarea>
          </div>
          <CardFooter>
            <p className='text-center'>
              <Button
                variant='solid'
                color='secondary'
                size='lg'
              >
                Request A Demo
              </Button>
            </p>
          </CardFooter>
        </form>
      </CardBody>
    </Card>
  );
};

export default ContactForm;
