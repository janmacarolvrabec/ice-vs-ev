# Elektro vs. Bencin — Kalkulator stroškov lastništva

Interaktiven kalkulator, ki primerja **skupne stroške lastništva (TCO)** električnega in
klasičnega avtomobila na slovenskem trgu. Namenjen skupini **Elektro vozila Slovenije** —
vsak si lahko v realnem času izračuna svoj scenarij in vidi, kateri avto ga v resnici stane manj.

👉 **Odpri:** `index.html` (samostojna datoteka, brez namestitve — deluje v vsakem brskalniku,
tudi brez interneta).

## Kaj zna

- **Živ „semafor" prihrankov** v lepljivi glavi — skupni prihranek se preračunava sproti.
- **Baza vozil** za slovenski trg 2026: klasični + komplementarni električni po štirih razredih
  (mestni, kompaktni, SUV, **premium / luksuzni E/F**). Vse WLTP porabe in cene so **urejljive**.
- **Subvencija (Borzen, JP SUB-EV26)** se samodejno nastavi po cenovnem razredu **in lastništvu**:
  fizične osebe do 25.000 € → 7.800 €, nato 7.200 / 6.500 / 4.500 €; pravne osebe (s. p.) nimajo
  razreda do 25.000 € (max 7.200 €). Nad 65.000 € → 0 €. Odbitek DDV velja le za BEV **do 80.000 €**.
- **Sekcije po korakih**: nakup + subvencija · uporaba · gorivo/elektrika · vzdrževanje in dajatve ·
  amortizacija · poslovni scenarij · ogljični odtis.
- **Energetska ekvivalenca**: koliko kWh nosi „en liter" goriva in koliko manj energije
  porabi električni za enako pot.
- **Poslovni scenarij (podjetje)** — preklopnik zasebno/poslovno:
  - **boniteta 0 %** za električna vozila (klasični 1,5 % nabavne vrednosti mesečno, do 2029),
  - **odbitek DDV** sorazmerno z deležem poslovne rabe (poln pri izključno poslovni rabi, BEV do 80.000 €).
- **Ogljični odtis (CO₂)** — dokaz skozi življenjsko dobo: dodatni ogljični dolg baterije, točka
  preloma v km in koliko manj CO₂ izpusti električni. Preklopnik za **vir elektrike**
  (jedrska/OVE · slovensko omrežje · premog TEŠ) pošteno pokaže tudi slabši scenarij.
- **Obraba gum** se računa iz stroška na kilometer × tvoja letna kilometrina.
- **Graf točke preloma** (break-even), **strošek na kilometer** in razčlemba po postavkah.
- **Deljiva povezava** — gumb skopira URL z vsemi tvojimi številkami (vgrajene v `#` naslova).
- **SEO + Open Graph** oznake za lep predogled ob deljenju na družbenih omrežjih.
- Tema za dan in noč, odziven prikaz na telefonu.

## Slike za deljenje

V mapi `share/` so pripravljene „clickbait" slike v vseh formatih (2× ločljivost):
`prihranek-1080x1080` (Instagram), `1080x1920` (Story/Reels), `1200x630` (Facebook/OG),
`1600x900` (Twitter/široko). Predloga `share-cards.html` + skripta `render-cards.mjs` (Playwright)
omogočata ponovno generiranje z drugimi številkami.

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
| Subvencija — fizične osebe (novo M1) | 7.800 € (≤25k) · 7.200 € (≤35k) · 6.500 € (≤45k) · 4.500 € (≤65k) | Borzen, JP SUB-EV26 |
| Subvencija — pravne osebe / s. p. | 7.200 € (≤35k) · 6.500 € (≤45k) · 4.500 € (≤65k) | Borzen, JP SUB-EV26 |
| Energija goriva | bencin ≈ 9,5 kWh/l · dizel ≈ 10,6 kWh/l | spodnja kurilna vrednost |

> Cene vozil so okvirne za slovenski trg 2026 in jih je treba preveriti pri prodajalcu.
> Orodje je pripomoček za lasten izračun, ne uradna ponudba.

## Objava & Open Graph

Za pravilen predogled ob deljenju (og:image) morajo biti oznake absolutne. V `index.html` so
privzeto nastavljene na GitHub Pages domeno `https://janmacarolvrabec.github.io/ice-vs-ev/` —
**če gostuješ drugje, zamenjaj domeno** v `<link rel="canonical">` in vseh `og:`/`twitter:` oznakah.
Na GitHub Pages: Settings → Pages → deploy iz te veje; stran bo na zgornjem naslovu, slika pa na
`…/share/prihranek-1200x630-facebook-og.png`.

### SEO

Stran je optimizirana za iskalnike okoli poizvedbe **„se ti bolj splača bencin ali elektrika 2026"**:
naslov `<title>` in `<h1>` sta usklajena s ključno besedo, urejeni so `meta description`, `canonical`,
`hreflang`, Open Graph in Twitter oznake ter strukturirani podatki (`WebApplication` + **`FAQPage`** za
Google rich results). Priložena sta tudi `robots.txt` in `sitemap.xml` — **ob menjavi domene posodobi
absolutne naslove** v obeh datotekah in v `og:`/`canonical` oznakah v `index.html`.

## Živ števec uporabe (marketinški element)

Pod uvodom je „živ" števec: **„Že N ljudi je izračunalo svoj scenarij."**

- **Kako deluje:** skupni strežniški števec ([Abacus](https://abacus.jasoncameron.dev), brezplačen,
  brez registracije). Proti-spam: poveča se **le enkrat na napravo** (localStorage `evk_counted_v1`),
  zato osveževanje strani ali ponovni izračun števca ne napihujeta.
- **Nastavljivo** (v `<script>` bloku `Živ števec uporabe`): `NS`/`KEY` (ime števca), `SEED`
  (zagonski zamik, če želiš začeti pri višji številki za predstavitev).
- **Peskovnik:** v predogledu na claude.ai (in povsod brez omrežja) se element **tiho skrije** —
  deluje šele na živi strani (GitHub Pages).

### Strožji IP-dedup (neobvezna nadgradnja: GoatCounter)

Za pravo štetje po IP (ne le po napravi) uporabi [GoatCounter](https://www.goatcounter.com) —
brezplačen, zasebnosti prijazen, dedup po zgoščenem IP na strežniku (brez piškotkov):
1. Ustvari brezplačen račun (npr. `ev-kalkulator.goatcounter.com`).
2. Dodaj njihovo `count.js` skripto.
3. Število prikaži prek `https://ev-kalkulator.goatcounter.com/counter/TOTAL.json` in ga vpiši v
   element `#useCountN` (namesto klica Abacus).

## Tehnično

Ena sama datoteka `index.html` — čisti HTML/CSS/JavaScript, brez zunanjih knjižnic in brez
gradnje. Graf je izrisan kot vgrajen SVG. Za gostovanje datoteko preprosto naloži na kateri koli
spletni strežnik (npr. GitHub Pages).

## Opombe glede pravilnosti podatkov

- **Cene vozil, zavarovanje in registracija** so okvirne vrednosti — preveri jih pri prodajalcu
  oz. zavarovalnici; vse so v kalkulatorju urejljive.
- **Davčni del** (boniteta, DDV) je poenostavljen pripomoček, ne davčni nasvet — za konkreten
  primer se posvetuj z računovodjo. Boniteta upošteva **letno znižanje osnove** po ZDoh-2, 43. členu
  (osnova po letih uporabe: 100/85/70/55/45/35/25/15/10 %), zato boniteta z leti pada in ni
  obračunana od polne nabavne vrednosti vsa leta.
- **CO₂** temelji na javnih študijah (ICCT 2025 — 72,8 kg CO₂e/kWh baterije, ~73 % nižje emisije
  v življenjski dobi; ElectricityMaps — 173 g CO₂/kWh za slovensko omrežje 2025).
- **Porabe** so preverjene: pri klasičnih kombinirana **WLTP** poraba (l/100 km), pri električnih
  **deklarirana WLTP** poraba (kWh/100 km, uradne vrednosti proizvajalcev / ceniki). Realna poraba
  je pri obeh običajno nekoliko višja od WLTP — vse vrednosti so urejljive.

## Sorodni eksperimenti Jana Macarola

- [Simulator fantomskih zastojev](https://janmacarolvrabec.github.io/Traffic-Jam-Simulator/)
- [Vpliv samovozečih vozil (FSD) na promet](https://janmacarolvrabec.github.io/Full-Self-Driving-traffic-impact/)
- [Upravljanje hitrosti na avtocestah](https://janmacarolvrabec.github.io/highway-speed-management/)

## Avtor

**Jan Macarol** — administrator skupine [Elektro vozila Slovenije](https://www.facebook.com/groups/ev.slovenije/).
[Instagram](https://instagram.com/janmacarol) ·
[Facebook](https://facebook.com/janmacarol) ·
[LinkedIn](https://www.linkedin.com/in/janmacarol) ·
[X](https://x.com/jmacarolv)

## Zasebnost

Stran **ne nastavlja piškotkov** in **ne zbira osebnih podatkov**. Uporablja le nujno lokalno shrambo
(`localStorage`) za delovanje (zastavici za števec in za obvestilo o zasebnosti). Ob prvem obisku se
prikaže nevsiljivo obvestilo; celotna **politika zasebnosti in pravno obvestilo** sta dostopna prek
povezav v nogi. Zunanje zahteve: anonimni števec (Abacus) in — ob kliku — povezave do družbenih omrežij.

## Licenca

Za **neprofitno (nekomercialno)** uporabo je koda prosto dovoljena — smeš jo uporabiti, prilagoditi
in deliti z navedbo avtorja (Jan Macarol) in vira. Za **komercialno** uporabo se predhodno dogovori
z avtorjem.
