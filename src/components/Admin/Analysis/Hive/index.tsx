import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import md from '../../../../assets/Hive.md'

export default function Hive() {
    const [content, setContent] = useState<string>('')

    useEffect(() => {
        fetch(md)
            .then(res => res.text())
            .then(text => setContent(text))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="w-full h-full overflow-auto">
            <ReactMarkdown children={content} />
        </div>
    )
}