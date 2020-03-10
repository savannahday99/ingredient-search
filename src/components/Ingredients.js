import React, { Component } from "react";
import "../App.css";

const poreCloggingIngredients = [
  "Acetylated Lanolin",
  "Acetylated Lanolin Alcohol",
  "Algae Extract",
  "Algin",
  "Butyl Stearate",
  "Carrageenan",
  "Cetyl Acetate",
  "Cetearyl Alcohol + Ceteareth 20",
  "Chondrus Crispus (aka Irish Moss or Carageenan Moss)",
  "Chlorella",
  "Coal Tar",
  "Cocoa Butter",
  "Coconut Alkanes",
  "Coconut Butter",
  "Coconut Oil",
  "Colloidal Sulfur",
  "Cotton Awws Oil",
  "Cotton Seed Oil",
  "D & C Red #17",
  "D & C Red #21",
  "D & C Red #3",
  "D & C Red #30",
  "D & C Red #36",
  "Decyl Oleate",
  "Dioctyl Succinate",
  "Disodium Monooleamido PEG 2- Sulfosuccinate",
  "Ethoxylated Lanolin",
  "Ethylhexyl Palmitate",
  "Glyceryl Stearate SE",
  "Glyceryl-3 Diisostearate",
  "Hexadecyl Alcohol",
  "Hydrogenated Vegetable Oil",
  "Isocetyl Alcohol",
  "Isocetyl Stearate",
  "Isodecyl Oleate",
  "Isopropyl Isostearate",
  "Isopropyl Linolate",
  "Isopropyl Myristate",
  "Isopropyl Palmitate",
  "Isostearyl Isostearate",
  "Isostearyl Neopentanoate",
  "Kelp",
  "Laminaria Digitata Extract",
  "Laminaria Saccharina",
  "Laureth-23",
  "Laureth-4",
  "Lauric Acid",
  "Mink Oil",
  "Myristic Acid",
  "Myristyl Lactate",
  "Myristyl Myristate",
  "Octyl Palmitate",
  "Octyl Stearate",
  "Oleth-3",
  "Oleyl Alcohol",
  "PEG 16 Lanolin",
  "PEG 200 Dilaurate",
  "PEG 8 Stearate",
  "PG Monostearate",
  "PPG 2 Myristyl Propionate",
  "Plankton",
  "Polyglyceryl-3 Diisostearate",
  "Potassium Chloride",
  "Propylene Glycol Monostearate",
  "Red Algae",
  "Seaweed",
  "Sea Whip Extract",
  "Shark Liver Oil (Squalene)",
  "Shea Butter",
  "Sodium Laureth Sulfate",
  "Sodium Lauryl Sulfate",
  "Solulan 16",
  "Sorbitan Oleate",
  "Soybean Oil",
  "Spirulina",
  "Steareth 10",
  "Stearic Acid Tea",
  "Stearyl Heptanoate",
  "Sulfated Castor Oil",
  "Sulfated Jojoba Oil",
  "Wheat Germ Glyceride",
  "Wheat Germ Oil",
  "Xylene"
];

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredientList: [],
      cloggedIngredients: [
        "Acetylated Lanolin",
        "Acetylated Lanolin Alcohol",
        "Algae Extract",
        "Algin",
        "Butyl Stearate",
        "Carrageenan",
        "Cetyl Acetate",
        "Cetearyl Alcohol + Ceteareth 20",
        "Chondrus Crispus (aka Irish Moss or Carageenan Moss)",
        "Chlorella",
        "Coal Tar",
        "Cocoa Butter",
        "Coconut Alkanes",
        "Coconut Butter",
        "Coconut Oil",
        "Colloidal Sulfur",
        "Cotton Awws Oil",
        "Cotton Seed Oil",
        "D & C Red #17",
        "D & C Red #21",
        "D & C Red #3",
        "D & C Red #30",
        "D & C Red #36",
        "Decyl Oleate",
        "Dioctyl Succinate",
        "Disodium Monooleamido PEG 2- Sulfosuccinate",
        "Ethoxylated Lanolin",
        "Ethylhexyl Palmitate",
        "Glyceryl Stearate SE",
        "Glyceryl-3 Diisostearate",
        "Hexadecyl Alcohol",
        "Hydrogenated Vegetable Oil",
        "Isocetyl Alcohol",
        "Isocetyl Stearate",
        "Isodecyl Oleate",
        "Isopropyl Isostearate",
        "Isopropyl Linolate",
        "Isopropyl Myristate",
        "Isopropyl Palmitate",
        "Isostearyl Isostearate",
        "Isostearyl Neopentanoate",
        "Kelp",
        "Laminaria Digitata Extract",
        "Laminaria Saccharina",
        "Laureth-23",
        "Laureth-4",
        "Lauric Acid",
        "Mink Oil",
        "Myristic Acid",
        "Myristyl Lactate",
        "Myristyl Myristate",
        "Octyl Palmitate",
        "Octyl Stearate",
        "Oleth-3",
        "Oleyl Alcohol",
        "PEG 16 Lanolin",
        "PEG 200 Dilaurate",
        "PEG 8 Stearate",
        "PG Monostearate",
        "PPG 2 Myristyl Propionate",
        "Plankton",
        "Polyglyceryl-3 Diisostearate",
        "Potassium Chloride",
        "Propylene Glycol Monostearate",
        "Red Algae",
        "Seaweed",
        "Sea Whip Extract",
        "Shark Liver Oil (Squalene)",
        "Shea Butter",
        "Sodium Laureth Sulfate",
        "Sodium Lauryl Sulfate",
        "Solulan 16",
        "Sorbitan Oleate",
        "Soybean Oil",
        "Spirulina",
        "Steareth 10",
        "Stearic Acid Tea",
        "Stearyl Heptanoate",
        "Sulfated Castor Oil",
        "Sulfated Jojoba Oil",
        "Wheat Germ Glyceride",
        "Wheat Germ Oil",
        "Xylene"
      ]
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let foundIngredients = [];
    for (let i = 0; i < this.state.ingredientList.length; i++) {
      if (poreCloggingIngredients.includes(this.state.ingredientList[i])) {
        foundIngredients.push(this.state.ingredientList[i]);
      }
    }
    this.setState({ cloggedIngredients: foundIngredients });
    this.setState({ ingredientList: [] });
  };

  handleInputChange = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value.split(", ")
    });
  };

  render() {
    const { cloggedIngredients } = this.state;

    return (
      <div>
        <h1>Pore-Clogging Ingredients Search</h1>
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="ingredientList"
            placeholder="Enter a comma-separated list of ingredients"
            rows="10"
            cols="60"
            onChange={this.handleInputChange}
          />
          <br />
          <button>Search</button>
        </form>
        <ul>
          {cloggedIngredients.map(ingredient => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Ingredients;
