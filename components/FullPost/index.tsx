import React from 'react';
import {Button, Paper, Typography} from "@mui/material";

import styles from './FullPost.module.scss';
import PostActions from "../PostActions";
import Image from "next/image";
import {
    TextsmsOutlined as MessageIcon,
    PersonAddOutlined as UserAddIcon,
} from '@mui/icons-material';

const FullPost = () => {
    return (
        <Paper elevation={0} className={styles.paper}>
            <div style={{ margin: '0 auto',width: 680 }}>
                <Typography variant="h4" className={styles.title}>
                    Очередной стрим от Sony от начала до конца посвятили грядущей игре по вселенной «Гарри Поттера» от студии Avalanche Software и WB Games.
                </Typography>
            <div>
            <Typography>
                14 минут трансляции занял первый показ геймплея Hogwarts Legacy, записанного на PS5, после чего показали короткую нарезку интервью с её разработчиками.
                RPG в открытом мире, действие которой разворачивается в Хогвартсе начала XIX века, анонсировали ещё осенью 2020-го, но с тех пор существенных новостей об игре не было (кроме объявления о её переносе).
            </Typography>
                <div style={{ width: 250,marginLeft: -8}}>
                    <PostActions />
                </div>
                <div className="d-flex justify-between align-center mt-30 mb-30">
                    <div className={styles.userInfo}>
                        <Image
                            src="https://leonardo.osnova.io/e5348320-b11a-9419-fb85-f7b63e2de194/-/scale_crop/64x64/-/format/webp/"
                            alt="Avatar"
                            width="40"
                            height="40"
                        />
                        <b>Donnie Darko</b>
                        <span>+1685</span>
                    </div>
                </div>

                <div>
                    <Button variant="contained" className="mr-15">
                        <MessageIcon/>
                    </Button>
                    <Button>
                        <UserAddIcon/>
                        <b className="ml-10">Подписаться</b>
                    </Button>
                </div>
            </div>
            </div>
        </Paper>
    );
};

export default FullPost;