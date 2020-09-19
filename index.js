import data from './list.js';
import './component/list-mobil.js';
import './component/list-mobil.js';
import DaftarMobil from './component/list-mobil.js';

const main = () => {

    window.onload = async() => {
        DaftarMobil.daftar();
    }

};
document.addEventListener("DOMContentLoaded", main);