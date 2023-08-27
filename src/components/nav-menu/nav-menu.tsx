import { Button, Menu, MenuItem } from '@mui/material';
import { MouseEvent, useState } from 'react';
import {ImMenu3} from 'react-icons/im'

const NavMenu = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(evt.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className='md:!hidden '>
			<Button
				id='basic-button'
				aria-controls={open ? 'basic-menu' : undefined}
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				className='!capitalize !text-white hover:!bg-sky-500'
			>
				<ImMenu3 className='w-11 h-11'/>
			</Button>
			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{ 'aria-labelledby': 'basic-button' }}
				className={'menu'}
			>
				<MenuItem className='!bg-white'>Home</MenuItem>
				<MenuItem>Movies</MenuItem>
				<MenuItem>TV Shows</MenuItem>
				<MenuItem>New</MenuItem>
				<MenuItem>Popular</MenuItem>
			</Menu>
		</div>
	);
};

export default NavMenu;