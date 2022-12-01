import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

import styles from './SideComments.module.scss';

const items = [
    {
        user: {
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
        id: 0
    },
    {
        user: {
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
        id: 1
    },
    {
        user: {
            fullname: 'Вася Пупкин',
        },
        text: 'Теперь, каждое рабочее утро, после кровати, я перекладываюсь туда спать ещё на часок. Ну и…',
        post: {
            title: 'Какая у вас дома ванна?',
        },
        id: 2
    },
];

interface CommentItemProps {
    user: {
        fullname: string;
    };
    text: string;
    post: {
        title: string;
    };
    id: number;
}

const CommentItem: React.FC<CommentItemProps> = ({ user, text, post }) => {
    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <img src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/" />
                <a href="#">
                    <b>{user.fullname}</b>
                </a>
            </div>
            <p className={styles.text}>{text}</p>
            <a href="#">
                <span className={styles.postTitle}>{post.title}</span>
            </a>
        </div>
    );
};

export const SideComments = () => {
    return (
        <div className={styles.root}>
            <h3>
                Комментарии <ArrowRightIcon />
            </h3>
            {items.map((obj) => (
                <CommentItem key={obj.id} {...obj} />
            ))}
        </div>
    );
};
