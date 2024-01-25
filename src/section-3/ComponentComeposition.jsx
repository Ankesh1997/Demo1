import React, {useState} from "react"
import TabBotton from "../customComponents/TabBotton";

const ComponentComposition = () => {
    const [selectedTopic, setSelectedTopic] = useState("Please click a button")
    // let tabContent = "please click on a button"
    function handleSelect(selectedItem){
        //selectedButton => "component","jsx","props","states"
        setSelectedTopic(selectedItem)
    }
    return(
       <div>
        <section id="example">
            <h2>Examples</h2>
            <menu>
            <TabBotton onselect={() => handleSelect('component')}>Component</TabBotton>
            <TabBotton onselect={() => handleSelect('jsx')}>JSX</TabBotton>
            <TabBotton onselect={() => handleSelect('Props')}>Props</TabBotton>
            <TabBotton onselect={() => handleSelect('states')}>states</TabBotton>
            </menu>
            {selectedTopic}
        </section>
       </div>
    )
}

export default ComponentComposition;