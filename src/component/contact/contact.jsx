import React from "react";
import { useForm } from "react-hook-form";
import './contact.css';
import disqus from 'disqus-react';
import { DiscussionEmbed, CommentCount, CommentEmbed } from 'disqus-react';

export default function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    
    <form onSubmit={handleSubmit(onSubmit)} className="contactForm">
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue="test" {...register("name", { required: true })} />{errors.name && <span>tu dois rentré votre name</span>}
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>mot de passe incorrect</span>}
      
      <input type="submit" />
    </form>
  
  );
}