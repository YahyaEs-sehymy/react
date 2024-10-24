import React from "react";
export default class JeuDe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { face: null, compteur: 0, fin: false };
  }
  jouer() {
    const valeur = Math.floor(Math.random() * 6) + 1;
    let c = this.state.compteur + 1;
    let fin = valeur === this.props.cache ? true : false;
    this.setState({ face: valeur, compteur: c, fin: fin });
  }
  initialiser() {
    this.setState({ face: null, compteur: 0, fin: false });
  }
  getImage = () => {
    if (this.state.face) {
      return `images${this.state.face}.jpg`; 
    }
    return "images/Dé.jpg"; 
  }
  render() {
    const styleImage = { width: "60px", height: "60px" };
    return (
      <>
        <img src="images/Dé.jpg" alt="Dé image" />
        <h1>Jeu de Dé...</h1>
        <h1>face : {this.state.face}</h1>
        <img src={this.getImage()} style={styleImage} alt="Dé" />
        {/* <img src="Dé.jpg"/> */}
        <h2>nombre d'essais : {this.state.compteur}</h2>
        <button onClick={() => this.jouer()}>Jouer</button>
        {this.state.fin === false ? null : (
          <p>Bravo vous avez trouvé la face cachée.....</p>
        )}
        <button onClick={() => this.initialiser()}>Initialiser</button>
      </>
    );
  }
}
