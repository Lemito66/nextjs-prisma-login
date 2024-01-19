

export function LabelForm({htmlFor, children}) {
  return (
    <>
        <label htmlFor={htmlFor} className="text-slate-500 mb-2 block text-sm">{children}</label>
    </>
  )
}

