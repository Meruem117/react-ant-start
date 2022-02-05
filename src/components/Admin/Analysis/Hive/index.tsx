import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import md from '@/assets/docs/Hive.md'

const Hive: React.FC = () => {
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

export default Hive
