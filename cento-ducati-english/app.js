const vocabularySections = [
  {
    title: "Greeting Customers",
    titleIt: "Salutare i clienti",
    items: [
      ["Welcome", "Benvenuti"],
      ["Good evening", "Buonasera"],
      ["Do you have a reservation?", "Avete una prenotazione?"],
      ["How many people?", "Quante persone?"],
      ["Please follow me", "Seguitemi, per favore"],
      ["This way, please", "Da questa parte, per favore"],
      ["Inside or outside?", "Dentro o fuori?"],
      ["Your table is ready", "Il vostro tavolo e pronto"],
      ["Please wait a moment", "Aspettate un momento, per favore"],
      ["Enjoy your meal", "Buon appetito"]
    ]
  },
  {
    title: "At The Table",
    titleIt: "Al tavolo",
    items: [
      ["Table", "Tavolo"],
      ["Chair", "Sedia"],
      ["Menu", "Menu"],
      ["Wine list", "Carta dei vini"],
      ["Glass", "Bicchiere"],
      ["Wine glass", "Calice"],
      ["Plate", "Piatto"],
      ["Fork", "Forchetta"],
      ["Knife", "Coltello"],
      ["Spoon", "Cucchiaio"],
      ["Napkin", "Tovagliolo"],
      ["Tablecloth", "Tovaglia"],
      ["Salt", "Sale"],
      ["Pepper", "Pepe"],
      ["Olive oil", "Olio d'oliva"],
      ["Vinegar", "Aceto"],
      ["Bread basket", "Cestino del pane"]
    ]
  },
  {
    title: "Food Categories",
    titleIt: "Categorie del menu",
    items: [
      ["Appetizer", "Antipasto"],
      ["Starter", "Antipasto"],
      ["First course", "Primo"],
      ["Main course", "Secondo"],
      ["Side dish", "Contorno"],
      ["Dessert", "Dolce"],
      ["Seafood", "Frutti di mare"],
      ["Fish", "Pesce"],
      ["Meat", "Carne"],
      ["Pasta", "Pasta"],
      ["Pizza", "Pizza"],
      ["Salad", "Insalata"],
      ["Soup", "Zuppa"],
      ["Cheese", "Formaggio"],
      ["Fruit", "Frutta"]
    ]
  },
  {
    title: "Seafood And Local Menu",
    titleIt: "Pesce e menu locale",
    items: [
      ["Mussels", "Cozze"],
      ["Clams", "Vongole"],
      ["Shrimp", "Gamberi"],
      ["Prawns", "Gamberoni"],
      ["Squid", "Calamari"],
      ["Octopus", "Polpo"],
      ["Sea bass", "Spigola", "sea bass"],
      ["Sea bream", "Orata"],
      ["Tuna", "Tonno"],
      ["Swordfish", "Pesce spada"],
      ["Anchovies", "Acciughe"],
      ["Raw seafood", "Crudo di mare"],
      ["Fried seafood", "Frittura di mare"],
      ["Grilled fish", "Pesce alla griglia"],
      ["Catch of the day", "Pescato del giorno"]
    ]
  },
  {
    title: "Cento Ducati Seafood Dishes",
    titleIt: "Piatti di pesce Cento Ducati",
    items: [
      ["Fried octopus", "Frittura di polpo"],
      ["Fried calamari and shrimp", "Frittura di calamari e gamberi"],
      ["Sauteed mussels", "Saute di cozze"],
      ["Pasta with mussels and clams", "Pasta con cozze e vongole"],
      ["Cavatelli with blue crab sauce", "Cavatelli al sugo di granchio blu"],
      ["Swordfish and prawns", "Pesce spada e gamberoni"],
      ["Grilled cuttlefish and prawns", "Seppia e gamberoni alla griglia"]
    ]
  },
  {
    title: "Cento Ducati Starters",
    titleIt: "Antipasti Cento Ducati",
    items: [
      ["Eggplant parmigiana", "Parmigiana di melanzane"],
      ["Mixed fried starters", "Frittino misto"],
      ["Potato croquettes", "Crocchette di patate"],
      ["Pittule mix", "Pittule mix"],
      ["Grilled artichokes", "Carciofi grigliati"],
      ["Mixed bruschetta", "Bruschette miste"],
      ["Caramelized onion", "Cipolla caramellata"],
      ["Grilled and steamed vegetables", "Verdure grigliate e al vapore"],
      ["Cold cuts and cheese board", "Tagliere salumi e formaggi"],
      ["Fava beans and chicory", "Fave e cicorie"],
      ["Fried lampascioni", "Lampascioni fritti"]
    ]
  },
  {
    title: "Cento Ducati Pasta Dishes",
    titleIt: "Primi piatti Cento Ducati",
    items: [
      ["Tagliatelle with sausage, mushrooms, and gorgonzola", "Tagliatelle salsiccia, funghi e gorgonzola"],
      ["Orecchiette with local turnip greens", "Orecchiette con cime di rapa locali"],
      ["Laganari with sausage, tomatoes, and stracciatella", "Laganari con salsiccia, pomodori e stracciatella"],
      ["Orecchiette with meatballs in tomato sauce", "Orecchiette al sugo con polpette"],
      ["Ciceri e tria", "Ciceri e tria"],
      ["Maritati with horse meat sauce", "Maritati con sugo e pezzetti di cavallo"],
      ["Lecce-style lasagna", "Lasagna leccese"]
    ]
  },
  {
    title: "Cento Ducati Meat Dishes",
    titleIt: "Piatti di carne Cento Ducati",
    items: [
      ["Local foal steak", "Bistecca di puledro locale"],
      ["Local foal fillet", "Filetto di puledro locale"],
      ["Florentine steak with fillet", "Fiorentina con filetto"],
      ["Chianina beef entrecote", "Entrecote di scottona chianina"],
      ["Podolica beef steak", "Bistecca di podolica"],
      ["Sliced Podolica beef", "Tagliata di manzo podolica"],
      ["Podolica beef strips", "Straccetti di manzo podolica"],
      ["Horse meat stew", "Pezzetti di cavallo"],
      ["Mixed grill", "Grigliata mista"],
      ["Bombette", "Bombette tipiche"],
      ["House sausage", "Salsiccia della casa"],
      ["Horse meatballs", "Polpette di cavallo"],
      ["Chicken cutlet with fries", "Cotoletta di pollo con patatine fritte"]
    ]
  },
  {
    title: "Cento Ducati Desserts",
    titleIt: "Dolci Cento Ducati",
    items: [
      ["Mixed fruit", "Frutta mix"],
      ["Homemade tiramisu", "Tiramisu artigianale"],
      ["Spumone with figs and walnuts", "Spumone fichi e noci"],
      ["Hazelnut and pistachio spumone", "Spumone nocciola e pistacchio"],
      ["Hazelnut and chocolate spumone", "Spumone nocciola e cioccolato"]
    ]
  },
  {
    title: "Drinks",
    titleIt: "Bevande",
    items: [
      ["Still water", "Acqua naturale"],
      ["Sparkling water", "Acqua frizzante"],
      ["House wine", "Vino della casa"],
      ["White wine", "Vino bianco"],
      ["Red wine", "Vino rosso"],
      ["Rose wine", "Vino rosato"],
      ["Beer", "Birra"],
      ["Coffee", "Caffe"],
      ["Espresso", "Espresso"],
      ["Cappuccino", "Cappuccino"],
      ["Tea", "Te"],
      ["Juice", "Succo"],
      ["Soft drink", "Bibita"],
      ["Lemon soda", "Lemonsoda"],
      ["Digestif", "Amaro"]
    ]
  },
  {
    title: "Cooking And Taste",
    titleIt: "Cottura e sapori",
    items: [
      ["Grilled", "Alla griglia"],
      ["Fried", "Fritto"],
      ["Baked", "Al forno"],
      ["Raw", "Crudo"],
      ["Fresh", "Fresco"],
      ["Homemade", "Fatto in casa"],
      ["Spicy", "Piccante"],
      ["Sweet", "Dolce"],
      ["Salty", "Salato"],
      ["Sour", "Aspro"],
      ["Bitter", "Amaro"],
      ["Hot", "Caldo"],
      ["Cold", "Freddo"],
      ["Well done", "Ben cotto"],
      ["Rare", "Al sangue"]
    ]
  },
  {
    title: "Allergies And Diets",
    titleIt: "Allergie e diete",
    items: [
      ["Allergy", "Allergia"],
      ["Allergic", "Allergico"],
      ["Gluten-free", "Senza glutine"],
      ["Dairy-free", "Senza latticini"],
      ["Vegetarian", "Vegetariano", "veh juh tair ee un"],
      ["Vegan", "Vegano"],
      ["Nuts", "Frutta secca"],
      ["Peanuts", "Arachidi"],
      ["Shellfish", "Crostacei"],
      ["Eggs", "Uova"],
      ["Milk", "Latte"],
      ["Soy", "Soia"],
      ["Please tell the kitchen", "Per favore avvisi la cucina"]
    ]
  },
  {
    title: "Payment",
    titleIt: "Pagamento",
    items: [
      ["Bill", "Conto"],
      ["Receipt", "Ricevuta"],
      ["Cash", "Contanti"],
      ["Card", "Carta"],
      ["Credit card", "Carta di credito"],
      ["Contactless", "Contactless"],
      ["Tip", "Mancia"],
      ["Service charge", "Coperto o servizio"],
      ["Total", "Totale"],
      ["Change", "Resto"],
      ["It is included", "E incluso"],
      ["The card machine", "Il POS"],
      ["Please enter your PIN", "Inserisca il PIN, per favore"]
    ]
  }
];

const timeSections = [
  {
    title: "How To Say The Time",
    titleIt: "Come dire l'ora",
    items: [
      ["First say the hour: one o'clock", "Prima dici l'ora: l'una"],
      ["Use past from 1 to 29 minutes", "Usa past da 1 a 29 minuti"],
      ["Five past one", "L'una e cinque"],
      ["Ten past one", "L'una e dieci"],
      ["Twenty past one", "L'una e venti"],
      ["Quarter past one", "L'una e un quarto"],
      ["Half past one", "L'una e mezza"],
      ["Use to from 31 to 59 minutes", "Usa to da 31 a 59 minuti"],
      ["Twenty to two", "Le due meno venti"],
      ["Ten to two", "Le due meno dieci"],
      ["Five to two", "Le due meno cinque"],
      ["Quarter to two", "Le due meno un quarto"]
    ]
  },
  {
    title: "Basic Time Words",
    titleIt: "Parole base per il tempo",
    items: [
      ["Time", "Ora"],
      ["Hour", "Ora"],
      ["Minute", "Minuto"],
      ["Morning", "Mattina"],
      ["Afternoon", "Pomeriggio"],
      ["Evening", "Sera"],
      ["Tonight", "Stasera"],
      ["Today", "Oggi"],
      ["Tomorrow", "Domani"],
      ["Yesterday", "Ieri"],
      ["Early", "Presto"],
      ["Late", "Tardi"],
      ["Open", "Aperto"],
      ["Closed", "Chiuso"]
    ]
  },
  {
    title: "AM, PM, And 24-Hour Time",
    titleIt: "AM, PM e orario 24 ore",
    items: [
      ["AM means morning, before noon", "AM significa mattina, prima di mezzogiorno"],
      ["PM means afternoon or evening, after noon", "PM significa pomeriggio o sera, dopo mezzogiorno"],
      ["12 AM is midnight", "12 AM e mezzanotte"],
      ["12 PM is noon", "12 PM e mezzogiorno"],
      ["1 PM is 13:00", "L'una del pomeriggio e le 13:00"],
      ["2 PM is 14:00", "Le due del pomeriggio sono le 14:00"],
      ["3 PM is 15:00", "Le tre del pomeriggio sono le 15:00"],
      ["4 PM is 16:00", "Le quattro del pomeriggio sono le 16:00"],
      ["5 PM is 17:00", "Le cinque del pomeriggio sono le 17:00"],
      ["6 PM is 18:00", "Le sei di sera sono le 18:00"],
      ["7 PM is 19:00", "Le sette di sera sono le 19:00"],
      ["8 PM is 20:00", "Le otto di sera sono le 20:00"],
      ["9 PM is 21:00", "Le nove di sera sono le 21:00"],
      ["10 PM is 22:00", "Le dieci di sera sono le 22:00"],
      ["11 PM is 23:00", "Le undici di sera sono le 23:00"]
    ]
  },
  {
    title: "Restaurant Times",
    titleIt: "Orari del ristorante",
    items: [
      ["We open at twelve", "Apriamo a mezzogiorno"],
      ["We close at midnight", "Chiudiamo a mezzanotte"],
      ["The kitchen opens at seven", "La cucina apre alle sette"],
      ["The kitchen is closed", "La cucina e chiusa"],
      ["Your table is booked for eight thirty", "Il vostro tavolo e prenotato per le otto e trenta"],
      ["Please come back in ten minutes", "Tornate tra dieci minuti, per favore"],
      ["It will take about fifteen minutes", "Ci vorranno circa quindici minuti"],
      ["The wait is about twenty minutes", "L'attesa e di circa venti minuti"],
      ["We are fully booked tonight", "Siamo al completo stasera"],
      ["Lunch", "Pranzo"],
      ["Dinner", "Cena"]
    ]
  }
];

const phraseSections = [
  {
    title: "What Customers Say",
    titleIt: "Cosa dicono i clienti",
    items: [
      ["Can we sit outside?", "Possiamo sederci fuori?"],
      ["Do you have a table for two?", "Avete un tavolo per due?"],
      ["Do you have a table for four?", "Avete un tavolo per quattro?"],
      ["We have a reservation under Smith.", "Abbiamo una prenotazione a nome Smith."],
      ["Can we see the menu?", "Possiamo vedere il menu?"],
      ["Can we order now?", "Possiamo ordinare adesso?"],
      ["What is the special today?", "Qual e il piatto del giorno?"],
      ["What do you recommend?", "Cosa consiglia?"],
      ["Can you recommend a local dish?", "Puo consigliare un piatto locale?"],
      ["Is the fish fresh?", "Il pesce e fresco?"],
      ["Is this spicy?", "E piccante?"],
      ["Is this vegetarian?", "E vegetariano?", "Is this veh juh tair ee un?"],
      ["Does this have gluten?", "Contiene glutine?"],
      ["Does this have nuts?", "Contiene frutta secca?"],
      ["Can I have some more bread?", "Posso avere altro pane?"],
      ["Can we have another bottle of water?", "Possiamo avere un'altra bottiglia d'acqua?"],
      ["Everything was delicious.", "Era tutto delizioso."],
      ["Can we have the bill, please?", "Possiamo avere il conto, per favore?"],
      ["Can we pay separately?", "Possiamo pagare separatamente?"],
      ["Where is the bathroom?", "Dov'e il bagno?"]
    ]
  },
  {
    title: "What You Can Say",
    titleIt: "Cosa puoi dire",
    items: [
      ["Good evening, welcome to Cento Ducati.", "Buonasera, benvenuti al Cento Ducati."],
      ["Do you have a reservation?", "Avete una prenotazione?"],
      ["How many people are you?", "Quante persone siete?"],
      ["Please wait here for a moment.", "Aspettate qui un momento, per favore."],
      ["Your table is ready.", "Il vostro tavolo e pronto."],
      ["Here is the menu.", "Ecco il menu."],
      ["I will be right back.", "Torno subito."],
      ["I will ask the kitchen.", "Chiedo alla cucina."],
      ["This dish has shellfish.", "Questo piatto contiene crostacei."],
      ["This dish is gluten-free.", "Questo piatto e senza glutine."],
      ["Would you like dessert?", "Volete un dolce?"],
      ["Thank you, have a nice evening.", "Grazie, buona serata."]
    ]
  },
  {
    title: "Usual Responses",
    titleIt: "Risposte abituali",
    items: [
      ["Yes, of course.", "Si, certo."],
      ["No problem.", "Nessun problema."],
      ["One moment, please.", "Un momento, per favore."],
      ["I am sorry, we are full.", "Mi dispiace, siamo pieni."],
      ["I am sorry, the kitchen is closed.", "Mi dispiace, la cucina e chiusa."],
      ["Yes, we have a table outside.", "Si, abbiamo un tavolo fuori."],
      ["The bathroom is on the left.", "Il bagno e a sinistra."],
      ["The bathroom is on the right.", "Il bagno e a destra."],
      ["You can pay by card.", "Potete pagare con carta."],
      ["Cash or card?", "Contanti o carta?"],
      ["The bill is coming.", "Il conto sta arrivando."],
      ["Thank you very much.", "Grazie mille."]
    ]
  },
  {
    title: "Small Problems",
    titleIt: "Piccoli problemi",
    items: [
      ["I do not speak English very well.", "Non parlo molto bene inglese."],
      ["Can you repeat, please?", "Puo ripetere, per favore?"],
      ["Can you speak slowly, please?", "Puo parlare lentamente, per favore?"],
      ["I understand.", "Capisco."],
      ["I do not understand.", "Non capisco."],
      ["Let me call someone who speaks English.", "Chiamo qualcuno che parla inglese."],
      ["I am sorry for the wait.", "Mi dispiace per l'attesa."],
      ["There was a mistake.", "C'e stato un errore."],
      ["We will fix it now.", "Lo sistemiamo subito."],
      ["Thank you for your patience.", "Grazie per la pazienza."]
    ]
  }
];

const state = {
  voice: null,
  currentButton: null
};

function pickVoice() {
  const voices = window.speechSynthesis?.getVoices?.() ?? [];
  state.voice =
    voices.find((voice) => voice.lang === "en-US" && /samantha|google|microsoft|natural|premium/i.test(voice.name)) ||
    voices.find((voice) => voice.lang === "en-US") ||
    voices.find((voice) => voice.lang?.startsWith("en")) ||
    null;
}

function speak(text, button) {
  if (!("speechSynthesis" in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  state.currentButton?.classList.remove("is-speaking");
  state.currentButton = button;
  button.classList.add("is-speaking");

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-US";
  utterance.rate = 0.82;
  utterance.pitch = 1;
  utterance.volume = 1;
  if (state.voice) {
    utterance.voice = state.voice;
  }
  utterance.onend = utterance.onerror = () => {
    button.classList.remove("is-speaking");
    if (state.currentButton === button) {
      state.currentButton = null;
    }
  };
  window.speechSynthesis.speak(utterance);
}

function createRow([english, italian, pronunciation]) {
  const template = document.querySelector("#row-template");
  const row = template.content.firstElementChild.cloneNode(true);
  const playButton = row.querySelector(".play");
  row.querySelector(".english").textContent = english;
  row.querySelector(".italian").textContent = italian;
  playButton.setAttribute("aria-label", `Play pronunciation for ${english}`);
  playButton.addEventListener("click", () => speak(pronunciation || english, playButton));
  return row;
}

function createAccordion(section, index, openFirst = false) {
  const template = document.querySelector("#accordion-template");
  const accordion = template.content.firstElementChild.cloneNode(true);
  const toggle = accordion.querySelector(".accordion-toggle");
  const panel = accordion.querySelector(".accordion-panel");
  const panelId = `section-${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`;

  accordion.querySelector(".accordion-title-en").textContent = section.title;
  accordion.querySelector(".accordion-title-it").textContent = section.titleIt;
  accordion.querySelector(".accordion-count").textContent = `${section.items.length} words`;
  panel.id = panelId;
  toggle.setAttribute("aria-controls", panelId);

  section.items.forEach((item) => panel.append(createRow(item)));

  toggle.addEventListener("click", () => {
    const isOpen = accordion.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  if (openFirst) {
    accordion.classList.add("is-open");
    toggle.setAttribute("aria-expanded", "true");
  }

  return accordion;
}

function renderSections(targetId, sections, openFirst = false) {
  const target = document.querySelector(targetId);
  target.replaceChildren(...sections.map((section, index) => createAccordion(section, index, openFirst && index === 0)));
}

function filterSections(input, targetId, allSections, openResults = true) {
  const value = input.value.trim().toLowerCase();
  if (!value) {
    renderSections(targetId, allSections);
    return;
  }

  const filtered = allSections
    .map((section) => ({
      ...section,
      items: section.items.filter(([english, italian]) =>
        `${english} ${italian}`.toLowerCase().includes(value)
      )
    }))
    .filter((section) => section.items.length > 0);

  renderSections(targetId, filtered, openResults);
}

function setRoute(route) {
  document.querySelectorAll(".page").forEach((page) => page.classList.remove("is-visible"));
  document.querySelector(`#page-${route}`)?.classList.add("is-visible");

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.route === route);
  });
}

function initRouting() {
  const routeFromHash = () => {
    const route = location.hash.replace("#", "") || "vocabulary";
    setRoute(["vocabulary", "time", "phrases"].includes(route) ? route : "vocabulary");
  };

  window.addEventListener("hashchange", routeFromHash);
  routeFromHash();
}

function init() {
  renderSections("#vocabulary-list", vocabularySections, true);
  renderSections("#time-list", timeSections, true);
  renderSections("#phrase-list", phraseSections, true);

  document.querySelector("#vocabulary-search").addEventListener("input", (event) => {
    filterSections(event.currentTarget, "#vocabulary-list", vocabularySections);
  });

  document.querySelector("#phrase-search").addEventListener("input", (event) => {
    filterSections(event.currentTarget, "#phrase-list", phraseSections);
  });

  pickVoice();
  if ("speechSynthesis" in window) {
    window.speechSynthesis.addEventListener("voiceschanged", pickVoice);
  }

  initRouting();
}

document.addEventListener("DOMContentLoaded", init);
