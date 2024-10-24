export default function Fruitt({ fruits }) {
    const displayFruits = function () {
      return fruits.map(function (fruit) {
        return <li key={fruit}>{fruit}</li>;
      });
    };
  
    return (
      <div>
        <h1>Fruits :</h1>
        <ul>
          {displayFruits()}
        </ul>
      </div>
    );
  }
  
  