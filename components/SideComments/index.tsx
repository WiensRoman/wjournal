import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
// @ts-ignore
import data from '../../data'
import styles from './SideComments.module.scss';
import CommentItem from "../CommentItem";
import clsx from "clsx";

export const SideComments = () => {
    const [visible,setVisible] = React.useState(false);

    const toggleVisible = () => {
        setVisible(!visible);
    }

    return (
        <div className={clsx(styles.root,!visible && styles.rotated)}>
            <h3 onClick={toggleVisible}>
                Комментарии <ArrowRightIcon/>
            </h3>
            {visible && data.comments.popular.map((obj) => (
                <CommentItem key={obj.id} {...obj} />
            ))}
        </div>
    );
};
