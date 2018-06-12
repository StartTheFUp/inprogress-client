import React from 'react'
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './DisplayBlocks.css'
// const todoBlocks = (blocks) => blocks.filter(block => block.type === 'todos')
// const billetBlocks = (blocks) => blocks.filter(block => block.type === 'billets')
// const ressourceBlocks = (blocks) => blocks.filter(block => block.type === 'ressources')

const DisplayBlocks = ({children, comments}) => {
  console.log('comments', children, comments)
  return (
    <div className="AllBlocks">
      <Grid divided='vertically'>
        <Grid.Row columns={3}>
          <Grid.Column>
            <div className='Blocks'>
              <div className='otherBlocks'>
                <div className='Billets'>

                  {children.filter(({ props }) => props.block.type === 'billets')}
                  {console.log('coucou', children.filter(({ props }) => props.block.type === 'billets'))}
                </div>

                <div className='Ressources'>
                  {children.filter(({ props }) => props.block.type === 'ressources')}
                </div>
              </div>
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className='todos'>
              {children.filter(({ props }) => props.block.type === 'todos')}
            </div>
          </Grid.Column>
          <Grid.Column>
            <div className='comments'>

            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default DisplayBlocks
