import React from 'react';
import Link from 'next/link';
import { Paper, Typography} from "@mui/material";
import styles from './Post.module.scss'
import Image from "next/image";
import PostActions from "../PostActions";



export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
            <Typography variant="h5" className={styles.title}>
                <Link href="/news/test-123">
                23 ноября студия CD Project RED провела трансляцию, на которой полноценно представила некстген-обновление для «Ведьмака 3». Дата релиза апдейта уже известна — он состоится 14 декабря 2022 года на ПК, Xbox Series X|S и PS5. Обновление будет бесплатным для всех владельцев оригинальной игры.
                </Link>
            </Typography>
            <Typography className="mt-10 mb-15">
                Серия гоночных компьютерных игр, выпускаемая компанией Electronic Arts и разработанная в нескольких студиях, включая канадское отделение EA Black Box, британскую компанию Criterion Games и шведскую Ghost Games. В настоящее время разрабатывается под брендом EA Sports.
            </Typography>
            <Image
                src="https://img5.goodfon.ru/original/1920x1080/4/fa/the-witcher-3-wild-hunt-vedmak-3-dikaia-okhota-geralt-geralt.jpg"
                height={500}
                width={600}
                alt=""
            />
            <PostActions />
        </Paper>
    );
};
