import { ranges } from "../../data/ranges";
import { RADAR_WIDTH } from "../../geometry/constants";

const paddingMapping: Record<string, string> = {
	"0": "18",
	"1": "38",
	"2": "23",
	"3": "18",
};

export function RangeLegend() {
	return (
		<div className="absolute right-0 h-full" style={{ width: RADAR_WIDTH / 2 }}>
			<div className="text-xs flex h-full items-center w-full -mt-5">
				{ranges.map((range, index) => (
					<span
						key={range.name}
						className="text-sr-lighter-black"
						style={{ paddingLeft: `${paddingMapping[index]}px` }}
					>
						{range.name}
					</span>
				))}
			</div>
		</div>
	);
}
