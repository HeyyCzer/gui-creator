export default function Button({ bgColor, textColor, className, children, onClick }) {
	return (
		<button type="button" onClick={ onClick } className={`no-underline py-1.5 px-3.5 rounded-lg ${bgColor || "bg-white"} ${textColor || "text-black"} font-medium w-fit ${className}`}>
			{ children }
		</button>
	)
}
