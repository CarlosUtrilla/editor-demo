import * as React from 'react';
import Menu from '@mui/material/Menu';

export default function DropdownIcon({ children}: {children: React.ReactNode}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
		<>
			<div
				className="scena-icon"
				onClick={handleClick}
			>
          <i className="fa-solid fa-ellipsis-vertical"></i>
      </div>
      <Menu
        anchorEl={anchorEl}
        open={open}
				onClose={handleClose}
				className='scena-menu-dropdown'
      >
        {children}
      </Menu>
    </>
  );
}