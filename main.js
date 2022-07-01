const miktarElement = document.getElementById('miktar');

document.addEventListener('keyup', hesaplaToplamTutar);

function hesaplaToplamTutar(e){
    var birimFiyat = Number(document.getElementById("brFiyat").value);
    var miktar = Number(document.getElementById("miktar").value);
    var toplamTutar = miktar * birimFiyat;
    document.getElementById("toplamTutar").value = toplamTutar;
}

const indirimTutarElement = document.getElementById('indirimTutar');

document.addEventListener('keyup', hesaplaIndirim);

function hesaplaIndirim(e){
    var indirim = Number(document.getElementById("indirim").value);
    var toplamTutar =Number(document.getElementById("toplamTutar").value);
    var indirimCikarim = (toplamTutar*indirim)/100;
    document.getElementById("indirimTutar").value = indirimCikarim;
    document.getElementById("indirimliToplam").value = toplamTutar- indirimCikarim;
}

const kdvTutarElement = document.getElementById('kdvTutar');

document.addEventListener('keyup', hesaplakdv);

function hesaplakdv(e){
    var kdv = Number(document.getElementById("kdv").value);
    var indirimliToplamTutar =Number(document.getElementById("indirimliToplam").value);
    var kdvEklenim = (indirimliToplamTutar*kdv)/100;
    document.getElementById("kdvTutar").value = kdvEklenim;
    document.getElementById("kdvliToplam").value = indirimliToplamTutar + kdvEklenim;
}