export function Footer() {
	const logos = [
		{
			src: "https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg",
			alt: "Technologiestiftung Berlin Logo",
			className: "w-32",
			label: "Ein Projekt der",
		},
	];

	return (
		<footer className="flex flex-col md:flex-row w-full px-6 md:justify-center gap-12 md:gap-8 md:gap-x-20 border-t-2 pt-12 mt-12 pb-16">
			{logos.map(({ alt, src, className, label }) => (
				<div
					key={alt}
					className="flex flex-col gap-y-4 items-start justify-between"
				>
					<span className="font-light text-gray-400">{label}</span>
					<img src={src} alt={alt} className={className} />
				</div>
			))}
		</footer>
	);
}
