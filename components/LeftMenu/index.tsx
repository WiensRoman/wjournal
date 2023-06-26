import React from 'react';
import Link from 'next/link';
import {Button} from "@mui/material";
import styles from './LeftMenu.module.scss'
import {
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingUpOutlined as TrendingIcon,
    FormatListBulletedOutlined as ListIcon,
} from '@mui/icons-material';
import {useRouter} from "next/router";

const menu = [
    {text: 'Лента', icon: <FireIcon/>, path: '/'},
    {text: 'Сообщения', icon: <MessageIcon/>, path: '/messages'},
    {text: 'Рейтинг RJ', icon: <TrendingIcon/>, path: '/rating'},
    {text: 'Подписки', icon: <ListIcon/>, path: '/follows'},
];


export const LeftMenu: React.FC = () => {
    const router = useRouter();

    // @ts-ignore
    return (
        <div className={styles.menu}>
            <ul>
                {menu.map((obj) => (
                    <li key={obj.path}>
                        <Link href={obj.path}>
                            <Button variant={router.asPath === obj.path ? 'contained' : 'text'}>
                                {obj.icon}
                                {obj.text}
                            </Button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
