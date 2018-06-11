import Element from './Element.js'
import DisplaySection from '../components/Section.js'


const Section = ({ section, indexBlock, indexSection }) =>
  <DisplaySection>
    {section.elements.map((element, index) => {
      /*console.log("element", element)*/
    return <Element key={element.id} elem={element} indexBlock={indexBlock} indexSection={indexSection} indexElement={index}/>
    })}
  </DisplaySection>
