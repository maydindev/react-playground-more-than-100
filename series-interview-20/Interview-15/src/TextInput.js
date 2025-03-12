import React from 'react'

const TextInput = ({textInput,onChangeInput}) => {
  return (
    <div>
        <input type="text" value={textInput} placeholder="Buraya yazınız." onChange={onChangeInput} className="border border-green-500"/>
    </div>
  )
}

export default TextInput