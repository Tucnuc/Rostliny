import { Injectable } from '@angular/core';

export interface Plant {
  name: string;
  family: string;
  img: string[];
  colors: boolean[];
}

export interface Families {
  [key: string]: Plant[];
}

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  families: Families = {
    Miříkovité: [
      {
        "name": "Petržel Obecná",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/petrzel-obecna/petrzel1.webp", "images/rostliny/mirikovite/petrzel-obecna/petrzel2.webp", "images/rostliny/mirikovite/petrzel-obecna/petrzel3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Miřík Celer",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/mirik-celer/mirik1.webp", "images/rostliny/mirikovite/mirik-celer/mirik2.webp", "images/rostliny/mirikovite/mirik-celer/mirik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Mrkev Obecná",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/mrkev-obecna/mrkev1.webp", "images/rostliny/mirikovite/mrkev-obecna/mrkev2.webp", "images/rostliny/mirikovite/mrkev-obecna/mrkev3.webp"],
        "colors": [false, false, true]
      },
      {
        "name": "Kmín Kořenný",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/kmin-korenny/kmin1.webp", "images/rostliny/mirikovite/kmin-korenny/kmin2.webp", "images/rostliny/mirikovite/kmin-korenny/kmin3.webp"],
        "colors": [true, false, false]
      },
      {
        "name": "Brslice Kozí Noha",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/brslice-kozi-noha/brslice1.webp", "images/rostliny/mirikovite/brslice-kozi-noha/brslice2.webp", "images/rostliny/mirikovite/brslice-kozi-noha/brslice3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Bolševník Velkolepý",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/bolsevnik-velkolepy/bolsevnik1.webp", "images/rostliny/mirikovite/bolsevnik-velkolepy/bolsevnik2.webp", "images/rostliny/mirikovite/bolsevnik-velkolepy/bolsevnik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Bolševník Obecný",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/bolsevnik-obecny/bolsevnik1.webp", "images/rostliny/mirikovite/bolsevnik-obecny/bolsevnik2.webp", "images/rostliny/mirikovite/bolsevnik-obecny/bolsevnik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Máčka Ladní",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/macka-ladni/macka1.webp", "images/rostliny/mirikovite/macka-ladni/macka2.webp", "images/rostliny/mirikovite/macka-ladni/macka3.webp"],
        "colors": [true, false, true]
      },
      {
        "name": "Dehel Lesní",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/dehel-lesni/dehel1.webp", "images/rostliny/mirikovite/dehel-lesni/dehel2.webp", "images/rostliny/mirikovite/dehel-lesni/dehel3.webp"],
        "colors": [false, false, true]
      },
      {
        "name": "Kerblík Lesní",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/kerblik-lesni/kerblik1.webp", "images/rostliny/mirikovite/kerblik-lesni/kerblik2.webp", "images/rostliny/mirikovite/kerblik-lesni/kerblik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Krabilice Zápašná",
        "family": "Miříkovité",
        "img": ["images/rostliny/mirikovite/krabilice-zapasna/krabilice1.webp", "images/rostliny/mirikovite/krabilice-zapasna/krabilice2.webp", "images/rostliny/mirikovite/krabilice-zapasna/krabilice3.webp"],
        "colors": [false, true, true]
      }
    ],
    Růžovité: [
      {
        "name": "Hrušeň",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/hrusen/hrusen1.webp", "images/rostliny/ruzovite/hrusen/hrusen2.webp", "images/rostliny/ruzovite/hrusen/hrusen3.webp", "images/rostliny/ruzovite/hrusen/hrusen4.webp"],
        "colors": [false, false, true, false]
      },
      {
        "name": "Jabloň",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/jablon/jablon1.webp", "images/rostliny/ruzovite/jablon/jablon2.webp", "images/rostliny/ruzovite/jablon/jablon3.webp"],
        "colors": [false, false, true]
      },
      {
        "name": "Jeřáb",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/jerab/jerab1.webp", "images/rostliny/ruzovite/jerab/jerab2.webp", "images/rostliny/ruzovite/jerab/jerab3.webp", "images/rostliny/ruzovite/jerab/jerab4.webp"],
        "colors": [true, false, false, false]
      },
      {
        "name": "Třešeň",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/tresen/tresen1.webp", "images/rostliny/ruzovite/tresen/tresen2.webp", "images/rostliny/ruzovite/tresen/tresen3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Slivoň",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/slivon1/slivon1.webp", "images/rostliny/ruzovite/slivon1/slivon2.webp", "images/rostliny/ruzovite/slivon1/slivon3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Slivoň",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/slivon2/slivon1.webp", "images/rostliny/ruzovite/slivon2/slivon2.webp", "images/rostliny/ruzovite/slivon2/slivon3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Slivoň",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/slivon3/slivon1.webp", "images/rostliny/ruzovite/slivon3/slivon2.webp", "images/rostliny/ruzovite/slivon3/slivon3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Hloh",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/hloh/hloh1.webp", "images/rostliny/ruzovite/hloh/hloh2.webp"],
        "colors": [false, false]
      },
      {
        "name": "Růže",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/ruze/ruze1.webp", "images/rostliny/ruzovite/ruze/ruze2.webp", "images/rostliny/ruzovite/ruze/ruze3.webp"],
        "colors": [true, false, false]
      },
      {
        "name": "Ostružiník Křovitý",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/ostruzinik-krovity/ostruzinik1.webp", "images/rostliny/ruzovite/ostruzinik-krovity/ostruzinik2.webp", "images/rostliny/ruzovite/ostruzinik-krovity/ostruzinik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Ostružiník Maliník",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/ostruzinik-malinik/ostruzinik1.webp", "images/rostliny/ruzovite/ostruzinik-malinik/ostruzinik2.webp", "images/rostliny/ruzovite/ostruzinik-malinik/ostruzinik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Jahodník Truskavec",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/jahodnik-truskavec/jahodnik1.webp", "images/rostliny/ruzovite/jahodnik-truskavec/jahodnik2.webp", "images/rostliny/ruzovite/jahodnik-truskavec/jahodnik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Jahodník Obecný",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/jahodnik-obecny/jahodnik1.webp", "images/rostliny/ruzovite/jahodnik-obecny/jahodnik2.webp", "images/rostliny/ruzovite/jahodnik-obecny/jahodnik3.webp"],
        "colors": [true, false, false]
      },
      {
        "name": "Jahodník Trávnice",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/jahodnik-travnice/jahodnik1.webp", "images/rostliny/ruzovite/jahodnik-travnice/jahodnik2.webp", "images/rostliny/ruzovite/jahodnik-travnice/jahodnik3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Mochna Husí",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/mochna-husi/mochna1.webp", "images/rostliny/ruzovite/mochna-husi/mochna2.webp", "images/rostliny/ruzovite/mochna-husi/mochna3.webp"],
        "colors": [true, false, false]
      },
      {
        "name": "Kontryhel Ostrolaločný",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/kontryhel-ostrolalocny/kontryhel1.webp", "images/rostliny/ruzovite/kontryhel-ostrolalocny/kontryhel2.webp", "images/rostliny/ruzovite/kontryhel-ostrolalocny/kontryhel3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Kuklík Městský",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/kuklik-mestsky/kuklik1.webp", "images/rostliny/ruzovite/kuklik-mestsky/kuklik2.webp", "images/rostliny/ruzovite/kuklik-mestsky/kuklik3.webp"],
        "colors": [false, true, false]
      },
      {
        "name": "Řepík Lékařský",
        "family": "Růžovité",
        "img": ["images/rostliny/ruzovite/repik-lekarsky/repik1.webp", "images/rostliny/ruzovite/repik-lekarsky/repik2.webp", "images/rostliny/ruzovite/repik-lekarsky/repik3.webp"],
        "colors": [false, true, false]
      }
    ],
    Bobovité: [
      {
        "name": "Čočka Jedlá",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/cocka-jedla/cocka1.webp", "images/rostliny/bobovite/cocka-jedla/cocka2.webp", "images/rostliny/bobovite/cocka-jedla/cocka3.webp", "images/rostliny/bobovite/cocka-jedla/cocka4.webp"],
        "colors": [false, false, false, false]
      },
      {
        "name": "Fazol Obecný",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/fazol-obecny/fazol1.webp", "images/rostliny/bobovite/fazol-obecny/fazol2.webp", "images/rostliny/bobovite/fazol-obecny/fazol3.webp", "images/rostliny/bobovite/fazol-obecny/fazol4.webp"],
        "colors": [false, false, false, false]
      },
      {
        "name": "Hrách Setý",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/hrach-sety/hrach1.webp", "images/rostliny/bobovite/hrach-sety/hrach2.webp", "images/rostliny/bobovite/hrach-sety/hrach3.webp", "images/rostliny/bobovite/hrach-sety/hrach4.webp"],
        "colors": [false, false, false, false]
      },
      {
        "name": "Sója Luštinatá",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/soja-lustinata/soja1.webp", "images/rostliny/bobovite/soja-lustinata/soja2.webp", "images/rostliny/bobovite/soja-lustinata/soja3.webp", "images/rostliny/bobovite/soja-lustinata/soja4.webp"],
        "colors": [false, false, false, false]
      },
      {
        "name": "Bob Obecný",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/bob-obecny/bob1.webp", "images/rostliny/bobovite/bob-obecny/bob2.webp", "images/rostliny/bobovite/bob-obecny/bob3.webp", "images/rostliny/bobovite/bob-obecny/bob4.webp"],
        "colors": [false, false, false, false]
      },
      {
        "name": "Jetel Luční",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/jetel-lucni/jetel1.webp", "images/rostliny/bobovite/jetel-lucni/jetel2.webp", "images/rostliny/bobovite/jetel-lucni/jetel3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Tolice Vojtěška",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/tolice-vojteska/tolice1.webp", "images/rostliny/bobovite/tolice-vojteska/tolice2.webp", "images/rostliny/bobovite/tolice-vojteska/tolice3.webp", "images/rostliny/bobovite/tolice-vojteska/tolice4.webp"],
        "colors": [false, false, true, false]
      },
      {
        "name": "Vikev Setá",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/vikev-seta/vikev1.webp", "images/rostliny/bobovite/vikev-seta/vikev2.webp", "images/rostliny/bobovite/vikev-seta/vikev3.webp", "images/rostliny/bobovite/vikev-seta/vikev4.webp"],
        "colors": [false, false, false, true]
      },
      {
        "name": "Komonice Lékařská",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/komonice-lekarska/komonice1.webp", "images/rostliny/bobovite/komonice-lekarska/komonice2.webp", "images/rostliny/bobovite/komonice-lekarska/komonice3.webp", "images/rostliny/bobovite/komonice-lekarska/komonice4.webp"],
        "colors": [false, false, false, false]
      },
      {
        "name": "Lupina Mnoholistá",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/lupina-mnoholista/lupina1.webp", "images/rostliny/bobovite/lupina-mnoholista/lupina2.webp", "images/rostliny/bobovite/lupina-mnoholista/lupina3.webp", "images/rostliny/bobovite/lupina-mnoholista/lupina4.webp"],
        "colors": [false, false, false, true]
      },
      {
        "name": "Janovec Metlatý",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/janovec-metlaty/janovec1.webp", "images/rostliny/bobovite/janovec-metlaty/janovec2.webp", "images/rostliny/bobovite/janovec-metlaty/janovec3.webp", "images/rostliny/bobovite/janovec-metlaty/janovec4.webp", "images/rostliny/bobovite/janovec-metlaty/janovec5.webp"],
        "colors": [false, false, false, false, false]
      },
      {
        "name": "Trnovník Akát",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/trnovnik-akat/trnovnik1.webp", "images/rostliny/bobovite/trnovnik-akat/trnovnik2.webp", "images/rostliny/bobovite/trnovnik-akat/trnovnik3.webp", "images/rostliny/bobovite/trnovnik-akat/trnovnik4.webp", "images/rostliny/bobovite/trnovnik-akat/trnovnik5.webp"],
        "colors": [false, true, false, false, false]
      },
      {
        "name": "Hrachor Jarní",
        "family": "Bobovité",
        "img": ["images/rostliny/bobovite/hrachor-jarni/hrachor1.webp", "images/rostliny/bobovite/hrachor-jarni/hrachor2.webp", "images/rostliny/bobovite/hrachor-jarni/hrachor3.webp", "images/rostliny/bobovite/hrachor-jarni/hrachor4.webp"],
        "colors": [false, false, true, false]
      }
    ],
    Brukvovité: [
      {
        "name": "Brukev Zelná",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/brukev-zelna/brukev1.webp", "images/rostliny/brukvovite/brukev-zelna/brukev2.webp", "images/rostliny/brukvovite/brukev-zelna/brukev3.webp", "images/rostliny/brukvovite/brukev-zelna/brukev4.webp"],
        "colors": [false, false, false, false]
      },
      {
        "name": "Brukev Řepka",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/brukev-repka/brukev1.webp", "images/rostliny/brukvovite/brukev-repka/brukev2.webp", "images/rostliny/brukvovite/brukev-repka/brukev3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Hořčice Polní",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/horcice-polni/horcice1.webp", "images/rostliny/brukvovite/horcice-polni/horcice2.webp", "images/rostliny/brukvovite/horcice-polni/horcice3.webp"],
        "colors": [true, true, false]
      },
      {
        "name": "Ředkev Setá",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/redkev-seta/redkev1.webp", "images/rostliny/brukvovite/redkev-seta/redkev2.webp", "images/rostliny/brukvovite/redkev-seta/redkev3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Křen Selský",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/kren-selsky/kren1.webp", "images/rostliny/brukvovite/kren-selsky/kren2.webp", "images/rostliny/brukvovite/kren-selsky/kren3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Česnáček Lékařský",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/cesnacek-lekarsky/cesnacek1.webp", "images/rostliny/brukvovite/cesnacek-lekarsky/cesnacek2.webp", "images/rostliny/brukvovite/cesnacek-lekarsky/cesnacek3.webp"],
        "colors": [false, false, true]
      },
      {
        "name": "Měsíčnice Vytrvalá",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/mesicnice-vytrvala/mesicnice1.webp", "images/rostliny/brukvovite/mesicnice-vytrvala/mesicnice2.webp", "images/rostliny/brukvovite/mesicnice-vytrvala/mesicnice3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Řeřišnice Luční",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/rerisnice-lucni/rerisnice1.webp", "images/rostliny/brukvovite/rerisnice-lucni/rerisnice2.webp", "images/rostliny/brukvovite/rerisnice-lucni/rerisnice3.webp"],
        "colors": [true, false, true]
      },
      {
        "name": "Kokoška Pastuší Tobolka",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/kokoska-pastusi-tobolka/kokoska1.webp", "images/rostliny/brukvovite/kokoska-pastusi-tobolka/kokoska2.webp", "images/rostliny/brukvovite/kokoska-pastusi-tobolka/kokoska3.webp"],
        "colors": [true, false, false]
      },
      {
        "name": "Penízek Rolní",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/penizek-rolni/penizek1.webp", "images/rostliny/brukvovite/penizek-rolni/penizek2.webp", "images/rostliny/brukvovite/penizek-rolni/penizek3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Tařice Skalní",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/tarice-skalni/tarice1.webp", "images/rostliny/brukvovite/tarice-skalni/tarice2.webp", "images/rostliny/brukvovite/tarice-skalni/tarice3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Kyčelnice",
        "family": "Brukvovité",
        "img": ["images/rostliny/brukvovite/kycelnice/kycelnice1.webp", "images/rostliny/brukvovite/kycelnice/kycelnice2.webp", "images/rostliny/brukvovite/kycelnice/kycelnice3.webp"],
        "colors": [true, false, false]
      }
    ],
    Hvězdnicovité: [
      {
        "name": "Lopuch Větší",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/lopuch-vetsi/lopuch1.webp", "images/rostliny/hvezdnicovite/lopuch-vetsi/lopuch2.webp", "images/rostliny/hvezdnicovite/lopuch-vetsi/lopuch3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Pcháč Oset",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/pchac-oset/pchac1.webp", "images/rostliny/hvezdnicovite/pchac-oset/pchac2.webp", "images/rostliny/hvezdnicovite/pchac-oset/pchac3.webp"],
        "colors": [true, false, true]
      },
      {
        "name": "Pcháč Zelinný",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/pchac-zelinny/pchac1.webp", "images/rostliny/hvezdnicovite/pchac-zelinny/pchac2.webp", "images/rostliny/hvezdnicovite/pchac-zelinny/pchac3.webp"],
        "colors": [true, false, false]
      },
      {
        "name": "Locika Setá",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/locika-seta/locika1.webp", "images/rostliny/hvezdnicovite/locika-seta/locika2.webp", "images/rostliny/hvezdnicovite/locika-seta/locika3.webp"],
        "colors": [true, false, false]
      },
      {
        "name": "Locika Kompasová",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/locika-kompasova/locika1.webp", "images/rostliny/hvezdnicovite/locika-kompasova/locika2.webp", "images/rostliny/hvezdnicovite/locika-kompasova/locika3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Mléčka Zední",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/mlecka-zedni/mlecka1.webp", "images/rostliny/hvezdnicovite/mlecka-zedni/mlecka2.webp", "images/rostliny/hvezdnicovite/mlecka-zedni/mlecka3.webp"],
        "colors": [false, false, true]
      },
      {
        "name": "Pampeliška Lékařská",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/pampeliska-lekarska/pampeliska1.webp", "images/rostliny/hvezdnicovite/pampeliska-lekarska/pampeliska2.webp", "images/rostliny/hvezdnicovite/pampeliska-lekarska/pampeliska3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Podběl Lékařský",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/podbel-lekarsky/podbel1.webp", "images/rostliny/hvezdnicovite/podbel-lekarsky/podbel2.webp", "images/rostliny/hvezdnicovite/podbel-lekarsky/podbel3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Pelyněk Černobýl",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/pelynek-cernobyl/pelynek1.webp", "images/rostliny/hvezdnicovite/pelynek-cernobyl/pelynek2.webp", "images/rostliny/hvezdnicovite/pelynek-cernobyl/pelynek3.webp"],
        "colors": [false, true, false]
      },
      {
        "name": "Kopretina Obecná",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/kopretina-obecna/kopretina1.webp", "images/rostliny/hvezdnicovite/kopretina-obecna/kopretina2.webp", "images/rostliny/hvezdnicovite/kopretina-obecna/kopretina3.webp"],
        "colors": [false, true, true]
      },
      {
        "name": "Řebříček Lékařský",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/rebricek-lekarsky/rebricek1.webp", "images/rostliny/hvezdnicovite/rebricek-lekarsky/rebricek2.webp", "images/rostliny/hvezdnicovite/rebricek-lekarsky/rebricek3.webp"],
        "colors": [false, false, true]
      },
      {
        "name": "Sedmikráska Obecná",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/sedmikraska-obecna/sedmikraska1.webp", "images/rostliny/hvezdnicovite/sedmikraska-obecna/sedmikraska2.webp", "images/rostliny/hvezdnicovite/sedmikraska-obecna/sedmikraska3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Devětšil Lékařský",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/devetsil-lekarsky/devetsil1.webp", "images/rostliny/hvezdnicovite/devetsil-lekarsky/devetsil2.webp", "images/rostliny/hvezdnicovite/devetsil-lekarsky/devetsil3.webp"],
        "colors": [false, true, false]
      },
      {
        "name": "Čekanka Obecná",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/cekanka-obecna/cekanka1.webp", "images/rostliny/hvezdnicovite/cekanka-obecna/cekanka2.webp", "images/rostliny/hvezdnicovite/cekanka-obecna/cekanka3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Chrpa Luční",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/chrpa-lucni/chrpa1.webp", "images/rostliny/hvezdnicovite/chrpa-lucni/chrpa2.webp", "images/rostliny/hvezdnicovite/chrpa-lucni/chrpa3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Slunečnice Roční",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/slunecnice-rocni/slunecnice1.webp", "images/rostliny/hvezdnicovite/slunecnice-rocni/slunecnice2.webp", "images/rostliny/hvezdnicovite/slunecnice-rocni/slunecnice3.webp"],
        "colors": [false, false, false]
      },
      {
        "name": "Heřmánek Pravý",
        "family": "Hvězdnicovité",
        "img": ["images/rostliny/hvezdnicovite/hermanek-pravy/hermanek1.webp", "images/rostliny/hvezdnicovite/hermanek-pravy/hermanek2.webp", "images/rostliny/hvezdnicovite/hermanek-pravy/hermanek3.webp"],
        "colors": [false, false, false]
      }
    ]
  };

  getFamilies() {
    return this.families;
  }

  results: any[] = []
  setResults(data: any[]) { this.results = data }
  getResults() { return this.results }

  wasLoaded: boolean = false;
  changeStatus() { this.wasLoaded = true }
  getStatus() { return this.wasLoaded }
}