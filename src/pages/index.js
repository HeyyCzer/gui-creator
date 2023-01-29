import Button from "@/components/Button/full";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";

export default function Home() {
	const router = useRouter();
	const [counter, setCounter] = useState(2);

	useEffect(() => {
		const interval = setInterval(() => {
			if (counter === 2) return setCounter(0);
			setCounter(counter + 1);
		}, 2000);

		return () => clearInterval(interval);
	}, [counter]);

	return (
		<main>
			<section className="flex flex-col items-center justify-center h-2/3">
				<div className="mb-12 text-center">
					<span className="font-bold text-6xl">
						<span className={`${counter === 0 && "text-blue-500"} transition-colors duration-500 mx-2`}>Chest</span>
						<span className={`${counter === 1 && "text-blue-500"} transition-colors duration-500 mx-2`}>GUI</span>
						<span className={`${counter === 2 && "text-blue-500"} transition-colors duration-500 mx-2`}>Creator</span>
					</span>
					<p className="font-light text-xl mt-2 text-gray-400">
						Create <span className="text-blue-500 border-b-4 border-blue-500 rounded-md font-semibold">Chest Interfaces</span> easily through your browser
					</p>
				</div>

				<Button className="mx-auto" onClick={() => router.push(`/creator/${uuidv4()}`)}>
					Start Creator
				</Button>
			</section>

			<section className="flex flex-col items-center justify-center bg-black/20 text-center h-1/3">
				<span>
					<FontAwesomeIcon className="text-3xl text-blue-500" icon={faPersonDigging} />
					<p className="font-semibold">Work in Progress</p>
				</span>
			</section>
		</main>
	);
}
