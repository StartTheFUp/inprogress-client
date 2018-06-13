import React from 'react'
import DisplayBlock from '../components/DisplayBlock.js'
import Section from './Section.js'
import {showUnprocessedTickets, showProcessedTickets} from '../actions/file.js'

const Block = ({block, idBlock, processedTickets}) =>

  <DisplayBlock block={block} showUnprocessedTickets={showUnprocessedTickets} showProcessedTickets={showProcessedTickets} processedTickets={processedTickets}>
    {block.sections.map((section) => {
      console.log('idSection', idBlock)
      return <Section key={section.id} section={section} idBlock={idBlock} idSection={section.id} processedTickets={processedTickets} blockType={block.type}/>
    })}
  </DisplayBlock>

export default Block
