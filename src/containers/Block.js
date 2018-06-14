import React from 'react'
import DisplayBlock from '../components/DisplayBlock.js'
import Section from './Section.js'
import {showUnprocessedTickets, showProcessedTickets, changeDisplayCheck} from '../actions/file.js'

const Block = ({block, idBlock, processedTickets, showCheck}) =>
  <DisplayBlock block={block} showUnprocessedTickets={showUnprocessedTickets} showProcessedTickets={showProcessedTickets} processedTickets={processedTickets} showCheck={showCheck} changeDisplayCheck={changeDisplayCheck}>
    {block.sections.map((section) => {
      return <Section key={section.id} section={section} idBlock={idBlock} idSection={section.id} processedTickets={processedTickets} blockType={block.type} showCheck={showCheck}/>
    })}
  </DisplayBlock>

export default Block
