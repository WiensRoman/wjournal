import React from 'react';
import {Button, Paper, Typography} from "@mui/material";
import styles from './LeftMenu.module.scss'
import {
    WhatshotOutlined as FireIcon,
    SmsOutlined as MessageIcon,
    TrendingUpOutlined as TrendingIcon,
    FormatListBulletedOutlined as ListIcon,
} from '@mui/icons-material';


export const LeftMenu: React.FC = () => {
    return (
        <div className={styles.menu}>
            <ul>
                <li>
                    <Button>
                        <FireIcon/>
                        Лента
                    </Button>
                </li>
                <li>
                    <Button>
                        <MessageIcon/>
                        Сообщения
                    </Button>
                </li>
                <li>
                    <Button>
                        <TrendingIcon/>
                        Рейтинг TJ
                    </Button>
                </li>
                <li>
                    <Button>
                        <ListIcon/>
                        Подписки
                    </Button>
                </li>
            </ul>
        </div>
    );
};
