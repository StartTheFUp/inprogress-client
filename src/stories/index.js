import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Button, Welcome } from '@storybook/react/demo'

import ProjectHeader from '../components/ProjectHeader'
import mockedProjectData from '../mocks/projects/1.json'

import TodoBlock from '../components/TodoBlock'
import mockedTodoBlock from '../mocks/blocks/block-todosSTFU.json'
import TodoElement from '../components/TodoElement'

import TicketBlock from '../components/TicketBlock'
import mockedTicketBlock from '../mocks/blocks/block-billets.json'
import TicketElement from '../components/TicketElement'

import ResourceBlock from '../components/ResourceBlock'
import mockedResourceBlock from '../mocks/blocks/block-ressources.json'
import ResourceElement from '../components/ResourceElement'

import BlocksContainer from '../containers/BlocksContainer'
import mockedBlocks from '../mocks/blocks.json'

import '../style/App.css'

storiesOf('ProjectHeader', module)
  .add('mocked', () => <ProjectHeader data={mockedProjectData} />)

// Todos

storiesOf('Todo/Block', module)
  .add('mocked', () => <TodoBlock block={mockedTodoBlock} showCheck={[]} />)

const uncheckedTodoElement = mockedTodoBlock.sections[0].elements[0]
const checkedTodoElement = mockedTodoBlock.sections[0].elements[1]

storiesOf('Todo/Element', module)
  .add('unchecked', () => <TodoElement element={uncheckedTodoElement} blockId={0} sectionId={0} />)
  .add('checked', () => <TodoElement element={checkedTodoElement} blockId={0} sectionId={0} />)

// Tickets

const archivedTicketElement = mockedTicketBlock.sections[0].elements[0]
const unarchivedTicketElement = mockedTicketBlock.sections[0].elements[1]

storiesOf('Ticket/Block', module)
  .add('archived', () => <TicketBlock block={mockedTicketBlock} shouldDisplayArchivedTickets={true} />)
  .add('not archived', () => <TicketBlock block={mockedTicketBlock} shouldDisplayArchivedTickets={false} />)

storiesOf('Ticket/Element', module)
  .add('archived', () => <TicketElement element={archivedTicketElement} blockId={0} sectionId={0} />)
  .add('unarchived', () => <TicketElement element={unarchivedTicketElement} blockId={0} sectionId={0} />)

// Resources

const mockedResourceElement = mockedResourceBlock.sections[0].elements[0]

storiesOf('Resource/Block', module)
  .add('mocked', () => <ResourceBlock block={mockedResourceBlock} />)

storiesOf('Resource/Element', module)
  .add('mocked', () => <ResourceElement element={mockedResourceElement} blockId={0} sectionId={0} />)

// BlocksContainer

storiesOf('BlocksContainer', module)
  .add('mocked', () => <BlocksContainer blocks={mockedBlocks} />)
