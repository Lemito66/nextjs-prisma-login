"use client";
import { useForm } from "react-hook-form";
import InputForm from "@/components/UI/InputForm";
import { INPUT_FORMS } from "@/app/data/inputForms";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });
  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl">Register</h1>
        {INPUT_FORMS.map((inputForm) => (
          <InputForm
            key={inputForm.id}
            type={inputForm.type}
            placeholder={inputForm.placeholder}
            register={register(inputForm.register, { required: true })}
            className={inputForm.className}
          />
        ))}
        <button className="bg-white">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
