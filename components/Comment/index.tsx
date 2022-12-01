import React from "react";
import Image from "next/image";
import { Typography, IconButton, Menu, MenuItem} from "@mui/material";
import styles from "./Comment.module.scss";
import {MoreHorizOutlined as MoreIcon} from '@mui/icons-material';


interface CommentPostProps {
    user: {
        fullname: string;
    };
    text: string;
}

export const Comment: React.FC<CommentPostProps> = ({user,text}) => {
    const [anchorEl,setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <div className={styles.comment}>
            <div className={styles.userInfo}>
                <Image
                    src="https://leonardo.osnova.io/1c00b5aa-00e4-5c78-a8ee-107725c1dcaf/-/scale_crop/200x200/-/format/webp/"
                    alt="Avatar"
                    width="40"
                    height="40"
                />
                <b className="ml-10">Master Oogway</b>
            </div>
            <Typography className={styles.text}>
                Ты большой молодец что сделал такой проект. Но если ты действительно хочешь попасть в геймдев(особенно ААА), то лучше не распыляйся на все позиции.
                Рекрутеру и ребятам с команды очень тяжело понять что ты из себя представляешь по конкретному направлению, которое они пытаются закрыть. Я покажу твою работу в своей компании, вдруг заинтересуются.
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
