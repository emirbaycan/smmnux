// resources/js/Pages/Create.jsx
import React, { useState } from 'react';
import { router } from '@inertiajs/react' // We need to import this router for making POST request with our form
import { TSetting } from '@/types/backend';

export default function Blog() {
    const add_blog: Array<TSetting> = [
        {
            name: 'head',
            type: 'text'
        }, {
            name: 'body',
            type: 'html'
        }, {
            name: 'image',
            type: 'img'
        }, {
            name: 'visible',
            type: 'check',
            checked: false
        }, {
            name: "published_at",
            type: "date"
        }
    ];
    
    const edit_blog: Array<TSetting> = [
        {
            name: 'head',
            type: 'text'
        }, {
            name: 'body',
            type: 'html'
        }, {
            name: 'image',
            type: 'img'
        }, {
            name: 'visible',
            type: 'check',
            checked: false
        }, {
            name: "published_at",
            type: "date"
        }
    ]
    return (
        <>
            <h1>Create Post</h1>
            <hr />
        </>
    )
}