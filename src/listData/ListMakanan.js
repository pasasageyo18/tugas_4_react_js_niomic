import { Component } from "react";

class ListMakanan extends Component {
  constructor(props) {
    super(props);
    // for linking the state to props component
    this.state = {
      datalist: this.props.makanan,
    };
  }

  render() {
    return (
      <div>
        <img src={this.state.datalist} alt="Produk Makanan" width={150} />
      </div>
    );
  }
}

export default ListMakanan;
