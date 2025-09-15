import React from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from "../BasicMenu/BasicMenu";


const NotificationBell = ({ iconColor, badgeContent }) => {
    const newNotifications = `You have ${badgeContent} new notifications!`;
    const noNotifications = `No new notifications yet.`;

    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const notifications = [
        {
            id: 0,
            label: 'Notifications 1',
        },
        {
            id: 1,
            label: 'Notifications 2',
        },
    ];

        return (
            <div>
                <Tooltip title={notifications.length ? newNotifications : noNotifications}>
                    <IconButton
                        color={iconColor}
                        onClick={notifications.length  ? handleOpen : null}
                    >
                        <Badge
                            badgeContent={notifications.length }
                            color="error"
                        >
                            <NotificationsIcon/>
                        </Badge>
                    </IconButton>
                </Tooltip>
                <BasicMenu
                    open={open}
                    anchorEl={anchorEl}
                    handleClose={handleClose}
                    menuItems={notifications}
                />
            </div>
        );
}

export default NotificationBell;