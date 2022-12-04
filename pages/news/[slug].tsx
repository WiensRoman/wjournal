import {MainLayout} from "../../layouts/MainLayout";
import {Divider, Paper, Tab, Tabs, Typography} from "@mui/material";
import FullPost from "../../components/FullPost";
import React from 'react';
import {Comment} from "../../components/Comment";
import {PostComments} from "../../components/PostComments";
import {comments} from "../../components/SideComments";

export default function Post() {
    return (
        <MainLayout className="mb-50" contentFullWidth>
            <FullPost/>
        <PostComments/>
        </MainLayout>
    )
}
