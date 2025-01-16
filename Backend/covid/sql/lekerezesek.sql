1. Europai zonak:
SELECT * FROM `eu_zonak`;

2. Összesitett adatok tablazatba
SELECT eu_zonak.zonanev, eu_adatok.datum, eu_adatok.szazalekpont
FROM eu_zonadatok
INNER JOIN eu_zonak ON eu_zonadatok.zonakID = eu_zonak.id
INNER JOIN eu_adatok ON eu_zonadatok.adatokID = eu_adatok.id
Where eu_zonak.zonanev = 'Észak-Európa';

3. Magyarorszagi adatok reszletesen
SELECT magyar_havi_adatok.datum, magyar_havi_adatok.import, 
magyar_havi_adatok.export, magyar_havi_adatok.export - magyar_havi_adatok.import AS Egyenleg 
FROM `magyar_havi_adatok`;