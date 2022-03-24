import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
    firstName: string,
    lastName: string,
};
  
const FormWithUseFormPage = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  
    console.log(watch("firstName")) // watch input value by passing the name of it
  
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        
        <label htmlFor='firstName'>First name:</label>
        <input defaultValue="test" {...register("firstName")} />
        
        <label htmlFor='lastName'>Last name:</label>
        <input {...register("lastName", { required: true })} />
        {errors.lastName && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
      </div>
    );
}

export default FormWithUseFormPage;