function Szamolas() {
    let szam1 = document.getElementsByName("szam1")[0].value;
    let szam2 = document.getElementsByName("szam2")[0].value;
    let osszeg = Number(szam1) + Number(szam2);
    document.getElementsByName("osszeg")[0].value = osszeg;
    if(szam1 > 120)
    {
        alert("Túl nagy a megadott érték");
    }
    if(szam2 > 30)
    {
        alert("Túl nagy a megadott érték");
    }
    }
