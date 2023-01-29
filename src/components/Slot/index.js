import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Slot.module.css";

export default function ChestSlot() {
	const router = useRouter();
	const dispatch = useDispatch();

	const { uuid } = router.query;
	let chest = useSelector(state => state.chests)[uuid];
	return (
		<div className={styles.box} />
	)
}
