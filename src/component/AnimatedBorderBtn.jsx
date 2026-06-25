import { Download } from "lucide-react"
import { Children } from "react"

export const AnimatedBorderBtn = ({children}) => {
    return (
        <button className='
            relative bg-transparent border border-border
            text-foreground hover:border-primary/50 transition-all
            duration-1000 focus:outline-none focus-visible:ring-2
            focus-visible:ring-primary focus-visible:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed group
            px-4 py-4 text-lg font-medium rounded-full overflow-visible
            animated-border cursor-pointer items-center justify-center gap-2 flex flex-row'
        >
            {children}
        </button>
    )
} 