import React from "react";
import Image from "next/image";
import { Typography, IconButton, Menu, MenuItem} from "@mui/material";
import styles from "./Comment.module.scss";
import {MoreHorizOutlined as MoreIcon} from '@mui/icons-material';


interface CommentPostProps {
    user: {
        fullname: string;
        avatarUrl: string;
    };
    text: string;
    createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({user,text,createdAt}) => {
    const [anchorEl,setAnchorEl] = React.useState(null);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }
    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <Image
                    src={user.avatarUrl}
                    alt="Avatar"
                    width="40"
                    height="40"
                />
               <div><b className="ml-10">{user.fullname}</b></div>
            <div><span>{createdAt}</span></div>
            </div>
            <Typography className={styles.text}>
                {text}
            </Typography>
            <span className={styles.replyBtn}>Ответить</span>
        <IconButton onClick={handleClick}>
            <MoreIcon/>
        </IconButton>

            <Menu
                anchorEl={anchorEl}
                elevation={2}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Удалить</MenuItem>
                <MenuItem onClick={handleClose}>Редактировать</MenuItem>
            </Menu>
        </div>
    );
};
