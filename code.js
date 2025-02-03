function calculer(ans, taille, type, data){
    let rez;

    switch (type) {
        case "mince":
            return rez = (taille -data.c_taille + ans /data.c_annee) *data.mince.coe1*data.mince.coe1;
        case "moyen":
            return rez = (taille -data.c_taille + ans /data.c_annee) *data.moyen.coe1;
        case "large":
            return rez = (taille -data.c_taille + ans /data.c_annee) *data.large.coe1*data.large.coe2;
        default:
            return alert("plase enter valid inputes");
    }
}
document.getElementById("btn").addEventListener('click', () => {
    const taille = parseFloat(document.getElementById("taille").value);
    const ans = parseFloat(document.getElementById("ans").value);
    const type = document.querySelector('input[name="type"]:checked')?.value;

    if (!type) {
        alert("Veuillez sélectionner un état.");
        return;
    }

    fetch("data.json")
        .then(res => res.json())
        .then(data => {
            document.getElementById("rez").textContent = calculer(ans, taille, type, data).toFixed(1);
        });
});
