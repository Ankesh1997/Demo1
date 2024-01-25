const reactDescriptions = ["fundamental", "crucial", "core"];

function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}
const DynamicValues = () => {
    return(
        <div>
             <h2>DynamicValues</h2>
             <p>{reactDescriptions[genRandomInt(2)]}React Concepts you will need to bulid for almost every web site </p>
        </div>
    );
}

export default DynamicValues;