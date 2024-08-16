import { InfoIcon } from "./icons/info-icon";
import { ListViewIcon } from "./icons/list-view-icon";

export function Header() {
	return (
		<header className="pt-10 md:pt-16 px-6 md:px-28 flex flex-row justify-between items-start">
			<img
				src="/images/PCDM-Logo-20240802.svg"
				alt="Post-COVID Datenmodell Logo"
				className="w-24"
			/>
			<div className="flex flex-row gap-6">
				<a
					href="#listView"
					className="flex text-xs flex-col items-center gap-2"
				>
					<ListViewIcon className="h-8 md:h-[42px]" />
					Listenansicht
				</a>
				<button
					className="flex text-xs flex-col items-center gap-2"
					onClick={() => {
						(
							document.getElementById("splash-screen") as HTMLDialogElement
						).showModal();
					}}
				>
					<InfoIcon className="h-8 md:h-[42px]" />
					Info
				</button>
			</div>
		</header>
	);
}
