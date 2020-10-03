import React, { useState, useEffect } from 'react'

export default ({ paragraphs = 5 }) => {
  const [ text, setText ] = useState(null)

  useEffect(() => {
    fetch(`https://baconipsum.com/api/?type=all-meat&paras=${paragraphs}&start-with-lorem=1`)
      .then(res => res.json())
      .then(res => setText(res))
  }, [paragraphs])

  return (
    {text &&
      text.map((p, i) => {
        return <p key={i}>{p}</p>
      })
    }
  )
}
