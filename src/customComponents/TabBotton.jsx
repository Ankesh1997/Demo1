/*export default function TabBotton(props){
    //In banila javascript, click events on a button write like this
    document.querySelector('button').addEventListener('click', () => {
        alert("Hello")
    });

    //But in case of React, click events on a button handle like this
    function handleClick(){
        alert("hello");
    }
    //onclick is a props of button and we passed value in a prop so in f(x) calling don't used ().
    return(
       <li>
        <button onClick={handleClick}>{props.children}</button>
       </li>
    );
};*/

//Every Custom Components recieves props, and this children prop set by react in default
//and second way to pass props is that

export default function TabBotton({children, onselect}){
    return(
        <li>
            <button onClick={onselect}>{children}</button>
        </li>
    )
}