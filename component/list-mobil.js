 class DaftarMobil extends HTMLElement {
     connectedCallback() {
         this.render()
     }
     render() {
         this.innerHTML = `  <div class="daftar-mobil">
         <div class="title">
             <p id="nama-mobil">Honda</p>
         </div>
         <img src="assets/icon_cars_assets.jpg" alt="" width="300px">
         <div class="harga-tahun">
             <p id="tahun">2018</p>
             <p id="harga">1,5 Milyar</p>
         </div>
         <div>
             <button>Ikut Lelang</button>
         </div>
     </div>`;
     }
 }
 customElements.define('daftar-mobil', DaftarMobil);
 export default DaftarMobil;