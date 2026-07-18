# Elektro vs. Bencin — Kalkulator stroškov lastništva

Interaktiven kalkulator, ki primerja **skupne stroške lastništva (TCO)** električnega in
klasičnega avtomobila na slovenskem trgu. Namenjen skupini **Električna vozila Slovenije** —
vsak si lahko v realnem času izračuna svoj scenarij in vidi, kateri avto ga v resnici stane manj.

👉 **Odpri:** `index.html` (samostojna datoteka, brez namestitve — deluje v vsakem brskalniku,
tudi brez interneta).

## Kaj zna

- **Živ „semafor" prihrankov** v lepljivi glavi — skupni prihranek se preračunava sproti.
- **Baza vozil** za slovenski trg 2026: 10 klasičnih (3–4 na razred) + komplementarni električni,
  razvrščeni po razredih (mestni, kompaktni, SUV). Vse WLTP porabe in cene so **urejljive**.
- **Subvencija Eko sklada** se samodejno nastavi po cenovnem razredu vozila (7.200 / 6.500 / 4.500 €).
- **Sekcije po korakih**: nakup + subvencija · uporaba (km, doba, delitev polnjenja) ·
  gorivo/elektrika · vzdrževanje in dajatve · amortizacija (neobvezno).
- **Energetska ekvivalenca**: koliko kWh nosi „en liter" goriva in koliko manj energije
  porabi električni za enako pot.
- **Graf točke preloma** (break-even) — kdaj nižji stroški vožnje poravnajo višjo nabavno ceno.
- **Strošek na kilometer** in razčlemba po postavkah v tabeli.
- **Deljiva povezava** — gumb skopira URL z vsemi tvojimi številkami (vgrajene v `#` naslova).
- Tema za dan in noč, odziven prikaz na telefonu.

## Kako računa

```
TCO = (nabavna cena − subvencija − preostala vrednost)      ← amortizacija (neobvezno)
      + doba × (energija + servis + zavarovanje + registracija + gume)
Strošek/km = TCO / (km na leto × doba)
```

Cena energije električnega je tehtano povprečje domačega in javnega polnjenja glede na
izbrani delež. „Točka preloma" primerja denar iz žepa **brez** upoštevanja preostale vrednosti.

## Privzeti podatki (viri, julij 2026)

| Postavka | Vrednost | Vir |
|---|---|---|
| Bencin 95 | 1,588 €/l | regulirane cene, Portal Energetika |
| Dizel | 1,723 €/l | regulirane cene, Portal Energetika |
| Domače polnjenje | 0,17 €/kWh | povprečje gospodinjskega odjema |
| Javno polnjenje (mešano AC/DC) | 0,42 €/kWh | cenik Petrol (AC 0,35 / DC 0,69) |
| Subvencija Eko sklad (novo M1) | 7.200 € (<35k) · 6.500 € (35–45k) · 4.500 € (45–65k) | Eko sklad / Borzen |
| Energija goriva | bencin ≈ 9,5 kWh/l · dizel ≈ 10,6 kWh/l | spodnja kurilna vrednost |

> Cene vozil so okvirne za slovenski trg 2026 in jih je treba preveriti pri prodajalcu.
> Orodje je pripomoček za lasten izračun, ne uradna ponudba.

## Tehnično

Ena sama datoteka `index.html` — čisti HTML/CSS/JavaScript, brez zunanjih knjižnic in brez
gradnje. Graf je izrisan kot vgrajen SVG. Za gostovanje datoteko preprosto naloži na kateri koli
spletni strežnik (npr. GitHub Pages).
