import { Component } from "react";
import ListMakanan from "../listData/ListMakanan";

class MenuMakanan extends Component {
  //make the constructor to set state
  constructor(props) {
    super(props);

    //state for pesanan
    this.state = {
      pesan: "",
      jumlah: 0,
      tampil: false,
    };

    //binding function
    this.pilihPesanan = this.pilihPesanan.bind(this);
    this.nasiPadang = this.nasiPadang.bind(this);
    this.sate = this.sate.bind(this);
    this.soto = this.soto.bind(this);
    this.uduk = this.uduk.bind(this);
    this.kuning = this.kuning.bind(this);
    this.batal = this.batal.bind(this);
  }

  pilihPesanan(value, e) {
    //change the value target and tampil to true when ordering
    this.setState({ [value]: e.target.value, tampil: true });
  }

  nasiPadang() {
    this.setState({
      pesan: "Nasi Padang",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  sate() {
    this.setState({
      pesan: "Sate",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  soto() {
    this.setState({
      pesan: "Soto",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  uduk() {
    this.setState({
      pesan: "Nasi Uduk",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  kuning() {
    this.setState({
      pesan: "Nasi Kuning",
      jumlah: this.state.jumlah + 1,
      tampil: true,
    });
  }

  //   Change and clear the state
  batal() {
    this.setState({
      pesan: "",
      jumlah: 0,
      tampil: false,
    });
  }

  render() {
    return (
      <div>
        <h3>Daftar Makanan Yang Kami Sediakan : </h3>
        <table>
          <tbody>
            <tr>
              <td>
                {/* import ListMakanan and insert the link */}
                <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                <center>
                  {/* adding food function for the value to change when the button is clicked */}
                  <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                <center>
                  <button onClick={this.sate}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan makanan="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                <center>
                  <button onClick={this.soto}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan makanan="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                <center>
                  <button onClick={this.uduk}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan makanan="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" />
                <center>
                  <button onClick={this.kuning}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        {/* connect the input value to the state pesan */}
        <input
          type="text"
          placeholder="Masukan pesanan anda"
          onChange={(e) => this.pilihPesanan("pesan", e)}
        />
        {/* connect the input value to the state jumlah */}
        <input
          type="number"
          placeholder="Masukan pesanan anda"
          onChange={(e) => this.pilihPesanan("jumlah", e)}
        />
        {/* connect the button to the batal function */}
        <button onClick={this.batal}>Batalkan semua pesanan</button>

        {/* when the tampil state is true, pesanan and jumlah will shows on the screen, otherwise it only show a text */}
        {this.state.tampil ? (
          <div>
            <h3>Pesanan Anda : {this.state.pesan}</h3>
            <h3>jumlah Pesanan : {this.state.jumlah}</h3>
          </div>
        ) : (
          <h1>Anda Belum Memesan</h1>
        )}
      </div>
    );
  }
}

export default MenuMakanan;
