"use client";

function InputForm({ type, placeholder, register }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className="p-3 rounded block mb-2 bg-slate-900 text-slate-300 w-full"
      />
    </>
  );
}

export default InputForm;
