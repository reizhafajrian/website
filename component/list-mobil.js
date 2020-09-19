 class DaftarMobil extends HTMLElement {
     set daftar(daftar) {
         this._daftar=daftar;
         this.render()
     }
     render() {
         this.innerHTML = `  <div class="daftar-mobil">
         <div class="title">
             <p id="nama-mobil">${this._daftar.nama}</p>
         </div>
         <img src="${this._daftar.gambar}" alt="" width="300px">
         <div class="harga-tahun">
             <p id="tahun">${this._daftar.Tahun}</p>
             <p id="harga">${this._daftar.Harga}</p>
         </div>
         <div class="btn-lelang">
             <button>Ikut Lelang</button>
         </div>
     </div>`;
     }
 }
 customElements.define('daftar-mobil', DaftarMobil);
 export default DaftarMobil;