
class Daftarnya extends HTMLElement{
    set daftarnya(daftarnya){
        this._daftarnya=daftarnya;
        console.log(this._daftarnya)
        this.render();
    }
    render(){
        this.innerHTML="";
        this._daftarnya.forEach(daftarnya => {
            const daftaritem=document.createElement("daftar-mobil");
            daftaritem.daftar=daftarnya;
            this.appendChild(daftaritem);
            
        });
    }
}
customElements.define("daftar-list",Daftarnya);