import React from 'react'
import Section from './Section.js'
import { Segment, Divider } from 'semantic-ui-react'

const Blocks = ({block,indexBlock}) => {
 /* console.log("block", block)
  console.log("indexblock", indexBlock)*/
  return (
    <div /*key={block._id}*/ className="AllBlocks">
      <Segment>
        <h1>{block.title}</h1>
        <Divider section />
        <div>{block.sections.map((section, index) =>
          <Section key={section.title} section={section} indexBlock={indexBlock} indexSection={index}/>)}</div>
      </Segment>

    </div>
  )
}

export default Blocks

