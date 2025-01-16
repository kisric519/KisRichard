1. Europai zonak:
SELECT * FROM `eu_zonak`;

2. Összesitett adatok tablazatba
SELECT eu_zonak.zonanev, eu_adatok.datum, eu_adatok.szazalekpont
FROM eu_zonadatok
INNER JOIN eu_zonak ON eu_zonadatok.zonakID = eu_zonak.id
INNER JOIN eu_adatok ON eu_zonadatok.adatokID = eu_adatok.id
Where eu_zonak.zonanev = 'Észak-Európa';

