"use client"

function InputForm({
    type, placeholder, register, className
}) {
  return (
    <>
        <input 
            type={type} 
            placeholder={placeholder} 
            {...register} 
            className={className}
        />
    </>
  )
}

export default InputForm