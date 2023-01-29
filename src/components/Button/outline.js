export default function OutlineButton({ borderColor, color, className, children, onClick }) {
	return (
		<button type="button" onClick={ onClick } className={`no-underline py-1.5 px-3.5 rounded-lg bg-transparent border ${borderColor || "border-white"} ${color || "text-white"} font-medium w-fit ${className}`}>
			{ children }
		</button>
	)
}
