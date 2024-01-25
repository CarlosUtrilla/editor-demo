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
import FontSize from "./TextIcons/FontSize";
import AlignLeftIcon from "./TextIcons/Aligns/AlignLeftIcon";
import AlignRightIcon from "./TextIcons/Aligns/AlignRightIcon";
import AlignCenterIcon from "./TextIcons/Aligns/AlignCenter";
import AlignJustifyIcon from "./TextIcons/Aligns/AlignJustify";
import FillIcon from "./ShapeIcons/FillIcon";
import BorderColorIcon from "./ShapeIcons/BorderColorIcon";
import MoreZoomIcon from "./Zoom/MoreZoom";
import LessZoomIcon from "./Zoom/LessZoom";
import ZoomTextIcon from "./Zoom/ZoomText";
import AlignIcon from "./TextIcons/Aligns/AlignIcon";
import DeleteIcon from "./DeleteIcon";

export const HomeMenu: Array<typeof Icon> = [
	MoveToolIcon,
	Divider,
	PrintAreaIcon,
	TextIcon,
	ImageIcon,
	Divider,
	LessZoomIcon,
	ZoomTextIcon,
	MoreZoomIcon,
	Divider,
	UndoIcon,
	RedoIcon,
	Divider,
	DeleteIcon
];

export const TextMenu: Array<typeof Icon> = [
	MoveToolIcon,
	Divider,
	TextIcon,
	Divider,
	FontFamily,
	Divider,
	FontSize,
	Divider,
	BoldIcon,
	ItalicIcon,
	UnderlineIcon,
	TextColorIcon,
	Divider,
	AlignIcon,
	Divider,
	DeleteIcon
]

export const ShapesMenu: Array<typeof Icon> = [
	MoveToolIcon,
	Divider,
	ShapesIcon,
	Divider,
	FillIcon,
	BorderColorIcon
]

export const PrintAreaMenu: Array<typeof Icon> = [
	MoveToolIcon,
	Divider,
	PrintAreaIcon,
	Divider,
	BorderColorIcon,
	Divider,
	DeleteIcon
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
	FontFamily,
	Divider,
	DeleteIcon
]