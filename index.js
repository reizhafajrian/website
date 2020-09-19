import data from './list.js';
import './component/list-mobil.js';
import './component/list-mobil.js';
import './component/daftarnya.js';
import DaftarMobil from './component/list-mobil.js';

const main = () => {
    const coba=document.querySelector('daftar-list');
    const contoh=document.querySelector('daftar-mobil');
    window.onload = async() => {
    coba.daftarnya=data
    }

};
document.addEventListener("DOMContentLoaded", main);