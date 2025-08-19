
type  InputProps ={

} & React.InputHTMLAttributes<HTMLInputElement>


function Input({className='', ...props}:InputProps) {
  return <input {...props} className={`border border-service-boder rounded-[10px] pl-3 h-12 mb-8 placeholder-placeholder-foreground ${className}`} />
}

export default Input
