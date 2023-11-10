import Divider from "./Divider";
import Icon from "./Icon";
import ImageIcon from "./ImageIcon";
import MoveToolIcon from "./MoveToolIcon";
import PrintAreaIcon from "./PrintAreaIcon";
import ShapesIcon from "./ShapeIcons/ShapesIcon";
import TextIcon from "./TextIcons/TextIcon";
import CropIcon from "./CropIcon";
import RectIcon from "./ShapeIcons/RectIcon";
import OvalIcon from "./ShapeIcons/OvalIcon";
import RoundRectIcon from "./ShapeIcons/RoundRectIcon";
import CircleIcon from "./ShapeIcons/CircleIcon";
import UndoIcon from "./RedoUndo/UndoIcon";
import RedoIcon from "./RedoUndo/RedoIcon";
import TextColorIcon from "./TextIcons/TextColorIcon";
import BoldIcon from "./TextIcons/BoldIcon";
import ItalicIcon from "./TextIcons/ItalicIcon";
import UnderlineIcon from "./TextIcons/UnderlinedIcon";
import FontFamily from "./TextIcons/FontFamily";

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

export const TextMenu: Array<typeof Icon> = [
	MoveToolIcon,
	Divider,
	TextIcon,
	Divider,
	FontFamily,
	Divider,
	BoldIcon,
	ItalicIcon,
	UnderlineIcon,
	TextColorIcon
]

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
	RedoIcon,
	BoldIcon,
	ItalicIcon,
	UnderlineIcon,
	FontFamily
]