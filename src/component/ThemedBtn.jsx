export const ThemedBtn = ({ className="", size="default", children }) => {
    const baseClasses = 
    'relative cursor-pointer overflow-hidden rounded-full font-medium foucs:outline-none foucs-visible:ring-2 foucs-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25'

    const sizeClasses = {
        sm: 'px-4 py-2 text-sm',
        default: "px-4 py-3 text-base",
        lg: 'px-8 py-4 text-lg'
        //lg: 'px-4 py-2 text-lg'
    }
    const classes = `${baseClasses} ${sizeClasses[size]} ${className}`

    return (
        <button className={classes}>
            <span className="relative flex items-center justify-center gap-2">{children}</span>
        </button>
    )
}