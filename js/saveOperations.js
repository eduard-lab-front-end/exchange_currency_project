let box = JSON.parse(localStorage.getItem('box')) || [];

  
const saveOperations = () => {
    localStorage.setItem('box', JSON.stringify(box));
  };

function pushOperations () { 
 const operation = {
    date : new Date(),
  };
  (box.length < 4) ? box.push(operation) && saveOperations() : box.unshift(operation) && box.pop() && saveOperations();
}

export default pushOperations;