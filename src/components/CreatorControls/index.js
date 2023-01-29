import { deleteChest, setChestSize, setChestTitle } from "@/store/reducers/chests";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Button from "../Button/full";
import OutlineButton from "../Button/outline";
import Slider from "../Slider";

export default function CreatorControls() {
	const router = useRouter();
	const dispatch = useDispatch();

	const { uuid } = router.query;
	const chests = useSelector((state) => state.chests);

	const title = chests[uuid]?.title || "";
	const size = chests[uuid]?.size || 6;

	const onRowsChange = (newSize) => {
		dispatch(setChestSize({ uuid, size: newSize[0] }));
	};

	const onTitleChange = (event) => {
		dispatch(setChestTitle({ uuid, title: event.target.value }));
	};

	const deleteGUI = (uuid) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				Swal.fire("Deleted!", "File has been deleted successfully", "success");
				dispatch(deleteChest({ uuid }));
			}
		});
	};

	return (
		<section className="fixed p-8 bg-white/5 w-1/4 xl:w-1/5 h-full">
			{/* Title */}
			<div className="text-xl">
				<Link href="/" className="font-bold">
					GUI Controls
				</Link>
			</div>

			<div className="pb-8 flex flex-col justify-between" style={{ height: "100%" }}>
				{/* Controls */}
				<div className="text-sm">
					<div className="my-4">
						<span className="mb-4">Inventory Title</span>
						<div className="pt-1">
							<input type="text" className="w-full rounded-md text-black py-1.5 px-3 text-xs" value={title} onChange={onTitleChange} />
						</div>
					</div>

					<div className="my-4">
						<span className="mb-4">
							Total Rows <span className="text-gray-400">({size})</span>
						</span>
						<div className="pt-1">
							<Slider step={1} min={1} val={[size]} max={6} onChange={onRowsChange} />
						</div>
					</div>

					<div className="my-4">
						<span className="mb-4">Created GUIs</span>
						<div className="bg-black/20 border-rounded-xl px-2 py-3 overflow-auto max-h-[40vh]">
							{Object.keys(chests)
								.reverse()
								.map((uuid, i) => (
									<div className="flex justify-between py-1" key={i}>
										<Link href={`/creator/${uuid}`}>
											<li>{chests[uuid].title}</li>
										</Link>
										<FontAwesomeIcon icon={faTrashCan} className="text-red-500" onClick={() => deleteGUI(uuid)} />
									</div>
								))}
						</div>
					</div>
				</div>

				{/* Export/import */}
				<div className="flex flex-col items-center lg:flex-row lg:justify-between">
					<OutlineButton className="mx-auto my-2 lg:m-0" borderColor="border-blue-500" color="text-blue-500">
						Importar
					</OutlineButton>
					<Button className="mx-auto my-2 lg:m-0">Exportar</Button>
				</div>
			</div>
		</section>
	);
}
