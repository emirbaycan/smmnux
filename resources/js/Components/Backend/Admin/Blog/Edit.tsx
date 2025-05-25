// resources/js/Pages/Edit.jsx
import React, { useState } from 'react';
import { router } from '@inertiajs/react'
import { Post } from '@/types';

export default function Edit({ post }: any ) {
    const [values, setValues] = useState({ // Form fields
        title: post.title,
        body: post.title
    });

    function handleChange(e:any) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e:any) {
        e.preventDefault()
        router.put(`/post/${post.id}`, values)
    }

    return (
        <>
            <h1>Edit Post</h1>
            <hr/>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title:</label>
                <input id="title" value={values.title} onChange={handleChange} />

                <label htmlFor="body">Body:</label>
                <textarea id="body" value={values.body} onChange={handleChange}></textarea>
                <button type="submit">Update</button>
            </form>
        </>
    )
}