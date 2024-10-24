import React, { useState } from 'react';
import Header from './Heder';
import Voiture  from './Voiture';
import { voitures, categories } from './data'; 

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredVoitures = voitures.filter((voiture) =>
    selectedCategory ? voiture.catégorie === selectedCategory : true
  );

  return (
    <div>
      <Header titre="Catalogue des voitures" />

      <div>
        {categories.map((category, index) => (
          <button 
            key={index} 
            value={category}
            onClick={() => handleCategoryClick(category)}
            style={{ margin: '5px', padding: '10px' }}
          >
            {category}
          </button>
        ))}
        <button 
          onClick={() => handleCategoryClick('')}
          style={{ margin: '5px', padding: '10px' }}
        >
          Tous
        </button>
      </div>

      <div>
        {filteredVoitures.map((voiture, index) => (
          <Voiture key={index} voiture={voiture} />
        ))}
      </div>
    </div>
  );
};

export default App;
