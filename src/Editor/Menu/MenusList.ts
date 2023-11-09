import Divider from "./Divider";
import Icon from "./Icon";
import ImageIcon from "./ImageIcon";
import MoveToolIcon from "./MoveToolIcon";
import PrintAreaIcon from "./PrintAreaIcon";
import ShapesIcon from "./ShapesIcon";
import TextIcon from "./TextIcon";
import CropIcon from "./CropIcon";
import RectIcon from "./RectIcon";
import OvalIcon from "./OvalIcon";
import RoundRectIcon from "./RoundRectIcon";
import CircleIcon from "./CircleIcon";
import UndoIcon from "./UndoIcon";
import RedoIcon from "./RedoIcon";

export const HomeMenu: Array<typeof Icon> = [
	MoveToolIcon,
	Divider,
	PrintAreaIcon,
	ShapesIcon,
	TextIcon,
	ImageIcon,
	Divider,
	UndoIcon,
	RedoIcon
];

export const CompleteMenu: Array<typeof Icon> = [
	MoveToolIcon,
	PrintAreaIcon,
	TextIcon,
	ImageIcon,
	CropIcon,
	RectIcon,
	OvalIcon,
	CircleIcon,
	RoundRectIcon,
	UndoIcon,
	RedoIcon
]