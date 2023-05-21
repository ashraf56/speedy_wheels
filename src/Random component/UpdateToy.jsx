import React, { useContext } from 'react';
import { ContextAuth } from '../Routes/AuthenticationCenter';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';

const UpdateToy = () => {

let Toys=useLoaderData()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data,e) => {
      
fetch(`https://b7a11-toy-marketplace-server-three.vercel.app/alltoy/${Toys._id}`,{
  method:"PUT",
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(data)
})
.then(res=> res.json())
.then(data=>{
  console.log(data);
})

e.target.reset();
}

    return (
        <div style={{height:'500px'}}>


<h1 className='text-center text-uppercase fw-bold py-4'>Update Toy Info</h1>

                       <div className='w-50 mx-auto mb-5'>


<form onSubmit={handleSubmit(onSubmit)}>



<div className="mb-3">
<label className="form-label">Price</label>
<input type="number" {...register("price", { required: true})}  min="0" className="form-control" 
defaultValue={Toys.price}
/>
</div>
<div className="mb-3">
<label className="form-label">Available quantity</label>
<input type="number" {...register("quantity", { required: true})}  min="0" className="form-control" defaultValue={Toys.quantity}/>
</div>
<div className="mb-3">
<label className="form-label">Detail description</label>
<textarea className="form-control" aria-label="With textarea"  defaultValue={Toys.description}  {...register("description", { required: true})}   ></textarea>
</div>

<button type="submit" className="btn btn-warning w-100">Update Toy</button>
</form>

</div>
        </div>
    );
};

export default UpdateToy;