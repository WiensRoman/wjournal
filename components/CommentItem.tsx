import React from 'react';
import styles from "./SideComments/SideComments.module.scss";
import Link from "next/link";
import Image from "next/image";

interface CommentItemProps {
    user: {
        id: number;
        fullname: string;
    };
    text: string;
    post: {
        id: number;
        title: string;
    };
    id: number;
}

const CommentItem: React.FC<CommentItemProps> = ({user, text, post}) => {
    const [visible,setVisible] = React.useState(false);

    return (
        <div className={styles.commentItem}>
            <div className={styles.userInfo}>
                <Image
                    src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
                    alt="User avatar"
                />
                <Link href={`/profile/${user.id}`}>
                        <b>{user.fullname}</b>
                </Link>

            </div>
            <p className={styles.text}>{text}</p>
            <Link href={`/news/${user.id}`}>
                <span className={styles.postTitle}>{post.title}</span>
            </Link>
        </div>
    );
};

export default CommentItem;