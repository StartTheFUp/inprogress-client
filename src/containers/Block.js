import React from 'react'
import DisplayBlock from '../components/DisplayBlock.js'
import Section from './Section.js'
const Block = ({block, indexBlock}) =>
  <DisplayBlock block={block}>
    {block.sections.map((section, index) => {
      return <Section key={section.title} section={section} indexBlock={indexBlock} indexSection={index}/>
    })}
  </DisplayBlock>

export default Block
