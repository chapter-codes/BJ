

type  LabelProps ={
    
} & React.LabelHTMLAttributes<HTMLLabelElement>

function Label( {className='', children, ...props}:LabelProps) {
  return (
    <label {...props} className={`capitalize mb-1 ${className}`}>
        {children} 
        <span className="text-secondary-background">*</span>
    </label>
  )
}

export default Label
