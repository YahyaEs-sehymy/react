export default function Event() {
    const handleClick = () => {
      alert('Boom!!!');
    };

    return (
      <div>
        <button onClick={handleClick}>
          click me!
        </button>
        <input  onChange={handleClick}>
        
        </input>
      </div>
    );
  }



  
  