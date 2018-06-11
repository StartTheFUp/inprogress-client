import React from 'react'
import DisplayBlock from '../components/DisplayBlock.js'
import Section from './Section.js'
const Block = ({block, idBlock}) =>
  <DisplayBlock block={block}>
    {block.sections.map((section) => {
      console.log("idSection", section.id)
      return <Section key={section.id} section={section} idBlock={idBlock} idSection={section.id}/>
    })}
  </DisplayBlock>

export default Block
