import SingleCat from './SingleCat';
import { useState } from 'react';
import AddCat from './AddCat';


const initialCats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: './images/cheetah.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: './images/cougar.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: './images/jaguar.JPG' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: './images/Leopard.JPG'  },   
    { id: 5, name: 'Snow leopard', latinName: 'Panthera uncia', image: './images/SnowLeopard.JPG' },
    { id: 6, name: 'Tiger', latinName: 'Panthera tigris', image: './images/tiger.JPG' },
    { id: 7, name: 'Lion', latinName: 'Panthera leo', image: './images/Lion.JPG' },
  ];
  

function BigCats() {
    const [cats, setCats] = useState(initialCats);
    
    const sortCatsAlphabetically = () => {
      const sortedCats = [...cats].sort((a, b) => a.name.localeCompare(b.name));
      setCats(sortedCats);
    };
  
    const reverseCats = () => {
      const reversedCats = [...cats].reverse();
      setCats(reversedCats);
    };
  
    const filterPantheraCats = () => {
      const filteredCats = initialCats.filter(cat => cat.latinName.startsWith('Panthera'));
      setCats(filteredCats);
    };
  
    const resetCats = () => {
      setCats(initialCats);
    };

    const addNewCat = (newCat) => {                                     // Exercise 5.1 & 5.2
      const newCatWithId = { ...newCat, id: cats.length + 1 };
      setCats([...cats, newCatWithId]);
    };

    const deleteCat = (id) => {
      const remainingCats = cats.filter(cat => cat.id !== id);
      setCats(remainingCats);
    };

    return (
        <div className="big-cats-container">

            <div className="catGrid">
            {cats.map((cat) => (
                <SingleCat key={cat.id} cat={cat} onDelete={deleteCat}/>
            ))}
            <button onClick={sortCatsAlphabetically}>Sort Alphabetically</button>
            <button onClick={reverseCats}>Reverse List</button>
            <button onClick={filterPantheraCats}>Panthera Family</button>
            <button onClick={resetCats}>Reset List</button>
            <AddCat onAdd={addNewCat} />                      

            </div>
        </div>
    );
}
  

  
export default BigCats;
