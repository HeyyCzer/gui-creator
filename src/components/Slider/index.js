import { Range as ReactRange } from "react-range";

export default function Slider(p) {
	const track = (provided) => ({
		...provided,
		height: "6px",
		width: "100%",
		backgroundColor: "rgba(255, 255, 255, 0.1)",
		borderRadius: "20px"
	});
	
	const thumb = (provided) => ({
		...provided,
		height: "12px",
		width: "12px",
		backgroundColor: "#3b82f6",
		borderRadius: "100%",
		outline: "none"
	});
	
	return (
		<ReactRange
			step={p.step}
			min={p.min}
			max={p.max}
			values={p.val}
			onChange={p.onChange}
			renderTrack={({ props, children }) => (
				<div
					{...props}
					style={track(props.style)}>
					{children}
				</div>
			)}
			renderThumb={({ props }) => (
				<div
					{...props}
					style={thumb(props.style)}
				/>
			)}
		/>
	);
}
