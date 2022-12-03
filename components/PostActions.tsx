import React, {CSSProperties} from 'react';
import {IconButton} from "@mui/material";
import {
    ShareOutlined as ShareIcon,
    RepeatOutlined as RepostIcon,
    ModeCommentOutlined as CommentsIcon,
    BookmarkBorderOutlined as FavoriteIcon,
} from '@mui/icons-material';

const styles: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    top: '5',
    listStyle: 'none',
    padding: '0',
    margin: '0',
}

const PostActions: React.FC = () => {
    return (
        <ul style={styles}>
            <li>
                <IconButton size="small"><CommentsIcon/></IconButton>
            </li>
            <li>
                <IconButton size="small"><RepostIcon/></IconButton>
            </li>
            <li>
                <IconButton size="small"><FavoriteIcon/></IconButton>
            </li>
            <li>
                <IconButton size="small"><ShareIcon/></IconButton>
            </li>
        </ul>
    );
};

export default PostActions;