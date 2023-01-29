import CreatorControls from "@/components/CreatorControls";
import ChestSlot from "@/components/Slot";
import { createChest, setChestTitle } from "@/store/reducers/chests";
import { parseMCColors } from "@/utils/colorParser";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Creator.module.css";

export default function Creator() {
	const router = useRouter();
	const dispatch = useDispatch();
	
	let { uuid } = router.query;
	const chests = useSelector(state => state.chests);
	useEffect(() => {
		if (uuid && !chests[uuid])
			dispatch(createChest({ uuid }));
	}, [ dispatch, chests, uuid ])

	const title = chests[uuid]?.title || "";
	const size = chests[uuid]?.size || 6;
	
	const updateTitle = (event) => {
		const el = event.target;

		el.disabled = false;
		el.focus();
	}

	const setNewTitle = (event) => {
		dispatch(setChestTitle(event.target.value));
	}

	const [parsedTitle, setParsedTitle] = useState(<></>);
	useEffect(() => {
		const parsedTitle = parseMCColors(title).raw;
		setParsedTitle(parsedTitle);
	}, [ title ]);

	return (
		<main className="flex">
			<CreatorControls />
			<div className="h-full w-full flex items-center justify-center">
				<div className={styles.main1}>
					{/* Chest inventory */}
					<input className={styles.title} value={ title } onChange={ setNewTitle } onDoubleClick={ updateTitle } />
					<div className={`relative ${styles.title}`} dangerouslySetInnerHTML={{ __html: parsedTitle }} />
					<div className={styles.boxes} style={{ gridTemplateRows: `repeat(${ size }, calc(var(--slot-size) + 8px))` }}>
						{
							Array(size * 9).fill(1).map((_, i) => (
								<ChestSlot key={`C-${i}`} type="Chest" slot={i} />
							))
						}
					</div>

					{/* Player normal inventory */}
					<h1 className={styles.title}>Inventory</h1>
					<div className={styles.boxes2}>
						{
							Array(3 * 9).fill(1).map((_, i) => (
								<ChestSlot key={`I-${i}`} type="Inventory" slot={i} />
							))
						}
					</div>

					{/* Hotbar */}
					<div className={styles.boxes3}>
						{
							Array(9).fill(1).map((_, i) => (
								<ChestSlot key={`H-${i}`} type="Hotbar" slot={i} />
							))
						}
					</div>
				</div>
			</div>
		</main>
	);
}
