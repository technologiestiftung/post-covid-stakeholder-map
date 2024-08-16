import React, { useEffect } from "react";
import { XIcon } from "./icons/x-icon";
import { useSplashStore } from "../stores/splash-screen-store";

const closeDialog = () => {
	useSplashStore.getState().hideSplashScreen();
	(document.getElementById("splash-screen") as HTMLDialogElement).close();
};

export function SplashScreen() {
	const { isSplashScreenVisible } = useSplashStore();

	useEffect(() => {
		if (isSplashScreenVisible()) {
			(
				document.getElementById("splash-screen") as HTMLDialogElement
			).showModal();
		}
	}, []);

	const onDialogClick = (
		event: React.MouseEvent<HTMLDialogElement, MouseEvent>,
	) => {
		/**
		 * This is confusing, yet correct. The dialog element spreads over the whole screen.
		 * If the user clicks on something inside the dialog, the event target won't be the dialog itself.
		 */
		const isClickOnDialogBackground =
			event.target === document.getElementById("splash-screen");

		if (!isClickOnDialogBackground) {
			return;
		}
		closeDialog();
	};

	const links = [
		{
			label: "Kontakt",
			url: "https://www.technologiestiftung-berlin.de/anfahrt-kontakt",
		},
		{
			label: "Quellcode",
			url: "https://github.com/technologiestiftung/post-covid-stakeholder-map",
		},
		{
			label: "Datenschutz",
			url: "https://www.technologiestiftung-berlin.de/datenschutz",
		},
		{
			label: "Impressum",
			url: "https://www.technologiestiftung-berlin.de/impressum",
		},
	];

	return (
		<dialog
			id="splash-screen"
			className="w-11/12 md:w-[760px] shadow-[0px_4px_18px_0px_#B8B8B8] rounded-xl bg-white text-sr-blue-grey backdrop:backdrop-blur-sm backdrop:bg-white backdrop:bg-opacity-50"
			onClick={onDialogClick}
		>
			<div className="flex flex-col p-6 md:px-12 md:py-8">
				<button className="flex self-end" onClick={closeDialog}>
					<XIcon />
				</button>
				<div className="text-[20px] text-sr-blue-100 font-medium pb-2 md:pt-7">
					Technologiestiftung Berlin
				</div>
				<h1 className="text-4xl md:text-[56px] font-semibold leading-10 pt-3 pb-1">
					Stakeholder-Map
				</h1>
				<h2 className="text-4xl md:text-[32px] font-semibold leading-10 pb-5 md:pb-7">
					zum Post-COVID-Datenmodell
				</h2>
				<p className="text-lg md:text-[24px] md:leading-8 pb-6">
					Die Stakeholder-Map visualisiert die im Rahmen der Challenge
					„Post-COVID-Datenmodell“ beteiligten Projekt- und
					Gesprächspartner:innen und relevante Akteur:innen die mit dem
					konzipierten Datenmodell der Technologiestiftung Berlin und dem Berlin
					Institute of Health at Charité Berlin in Verbindung stehen. Dabei
					wurden Akteur:innen aus insgesamt vier verschiedenen Bereichen
					identifiziert, die sich Anhand ihres Wirkungsgrads auf das Datenmodell
					und ihren Schwerpunktthemen unterscheiden. Einzelne Datenpunkte können
					mit Hilfe von Tags gefiltert und in der Listenansicht übersichtlich
					dargestellt werden. Mit Klick auf einen Punkt, können mehr
					Informationen über die einzelnen Organisationen oder Personen
					abgerufen werden.
				</p>
				<p className="text-lg md:text-[24px] md:leading-8">
					Die Stakeholder-Map ist eine Abwandlung des Stakeholder-Radars, des
					CityLAB Berlins. Es handelt sich hierbei um ein Open Source Projekt
					dessen Code auf GitHub frei weiter verwendet werden kann.
				</p>
			</div>
			<div className="flex flex-row flex-wrap gap-2 p-8 md:p-12 md:pt-0 pt-0 text-md md:text-lg justify-between text-sr-blue-100">
				{links.map((link) => (
					<a
						key={link.label}
						target="_blank"
						rel="noreferrer"
						className="hover:text-sr-blue-50 underline"
						href={link.url}
					>
						{link.label}
					</a>
				))}
			</div>
		</dialog>
	);
}
