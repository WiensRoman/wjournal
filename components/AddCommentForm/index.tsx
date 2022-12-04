import React from 'react';
import {Button, Input} from "@mui/material";
import styles from './AddCommentForm.module.scss'
import {TextsmsOutlined as MessageIcon} from "@mui/icons-material";

interface AddCommentFormProps {

}

export const AddCommentForm: React.FC<AddCommentFormProps> = () => {
    const [clicked,setClicked] = React.useState(false);
    const [text,setText] = React.useState('');

    const onAddComment = () => {
        setClicked(false);
        setText('');
    }

    return (
        <div className={styles.form}>
            <Input onChange={e => setText(e.target.value)} value={text} onFocus={() => setClicked(true)} minRows={(clicked? 5 : 1)} classes={{root: styles.fieldRoot}} placeholder="Написать комментарий ..." fullWidth multiline/>
            {clicked && <Button onClick={onAddComment} className={styles.addButton} variant="contained" color="primary">
                <MessageIcon className="mr-10"/>
                Опубликовать
            </Button>}
        </div>
    );
};
