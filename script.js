const services = [
["Complete Home Interiors","A cohesive look and feel from room to room.","⌂"],["Modular Kitchen","A practical, beautiful kitchen planned around you.","▤"],["Living Room","Comfort-led spaces made for gathering and unwinding.","◫"],["Bedroom Design","A restful retreat with thoughtful materials and light.","☾"],["False Ceiling","Architectural detail with integrated lighting options.","⌁"],["TV Unit Design","Custom focal points with clean lines and clever storage.","▣"],["TV Wall Panels","Textures and finishes that elevate your entertainment wall.","▥"],["Entertainment Units","A considered home for screens, sound and accessories.","▤"],["Floating TV Consoles","Light-looking storage with a contemporary finish.","▱"],["Wardrobe Design","Storage designed around your everyday routine.","▦"],["Storage Solutions","Make every inch work harder, without visual clutter.","▧"],["Space Planning","A better flow for the way you really live.","⌗"],["Home Renovation","Refresh existing spaces with a clear, thoughtful plan.","↗"],["Lighting Design","Layered lighting for warmth, focus and atmosphere.","☼"],["Dining Area","A welcoming setting for daily meals and celebrations.","◯"],["Kids Room","Flexible, playful spaces that can grow with them.","✳"],["Office Interiors","Calm, functional spaces for focused work.","▥"],["Turnkey Solutions","A coordinated journey from design to installation.","✓"]
];
const products = [
["PVC Wall Panels","▥"],["WPC Panels","▤"],["Charcoal Panels","▥"],["Decorative Wall Panels","▦"],["Wooden Louvers","▥"],["Designer Wallpapers","▧"],["Fancy Lights","✧"],["Chandeliers","✣"],["Pendant Lights","◉"],["Ceiling Lights","☼"],["Decorative Lighting","✧"],["Modular Furniture","▤"],["TV Consoles","▱"],["Coffee Tables","◯"],["Sofa Sets","⌂"],["Dining Tables","▤"],["Storage Units","▦"],["Wardrobe Accessories","▧"],["Kitchen Accessories","⌑"],["Home Decor","✳"]
];
const processSteps = [
["Discover","We listen to your needs, routines, ideas and budget."],["Site Visit","We understand dimensions, light and existing conditions."],["Space Planning","We map the layout and make every inch count."],["Design Direction","We align on the mood, palette and overall concept."],["Material Selection","We shortlist finishes, textures, fittings and products."],["Design Approval","We review the plan and agreed scope together."],["Coordination","We plan the work, timelines and installation details."],["Installation","The selected elements come together on site."],["Final Walkthrough","We review the details and hand over the space."]
];
const serviceGrid = document.getElementById("serviceGrid");
services.forEach((s,i)=>{const el=document.createElement("article");el.className="service-card reveal";el.innerHTML=`<div class="card-top"><span class="card-number">0${i+1}</span><span class="card-icon" aria-hidden="true">${s[2]}</span></div><h3>${s[0]}</h3><p>${s[1]}</p>`;serviceGrid.appendChild(el)});
const productGrid = document.getElementById("productGrid");
products.forEach(p=>{const el=document.createElement("div");el.className="product-item reveal";el.innerHTML=`<span class="product-symbol" aria-hidden="true">${p[1]}</span><span>${p[0]}</span>`;productGrid.appendChild(el)});
const processGrid = document.getElementById("processGrid");
processSteps.forEach((s,i)=>{const el=document.createElement("article");el.className="process-step reveal";el.innerHTML=`<span class="step-no">STEP 0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p>`;processGrid.appendChild(el)});
const gallery = [
  {
    label: "Living Rooms",
    cat: "living",
    img: "https://puravankara-bangalore.com/puravankara-hennur/images/gallery/gallery-4.jpg"
  },
  {
    label: "Modular Kitchens",
    cat: "kitchen",
    img: "https://d3gq2merok8n5r.cloudfront.net/abhinav/designs-sg-1633500163-pPxOT/1-2025-1736069156-Mlnx2/jfm-1736069166-hHEHT/ki-1736069174-McAfS/123-1728551364-avfjusgsdsg-1740642185-kD7q5.jpg"
  },
  {
    label: "TV Units",
    cat: "tv",
    img: "https://image-transform.materialdepot.com/azure/application_image/modern-living-room-with-white-marble-laminate-tv-unit-walnut-wood-fluted-wall-panels-and-beige-marble-floor-tiles-in-bengaluru-642f28f546.png?format=webp&height=1200"
  },
  {
    label: "Bedrooms",
    cat: "bedroom",
    img: "https://www.lakdi.com/cdn/shop/articles/trending-bed-designs-for-luxurious-sleep.png?v=1746433545"
  },
  {
    label: "Wall Panels",
    cat: "panels",
    img: "https://media.assettype.com/outlookindia/2026-02-23/x1kokgj3/India-Design-Lux-Temporis.jpg?ar=40%3A21&auto=format%2Ccompress&enlarge=true&mode=crop&ogImage=true&overlay=false&overlay_position=bottom&overlay_width=100&w=1200"
  },
  {
    label: "Lighting",
    cat: "lighting",
    img: "https://www.moveisonline.pt/fotos/Image/big_1669995367_candeeiro-de-teto-norma-18l.jpg"
  },
  {
    label: "Wardrobes",
    cat: "wardrobe",
    img: "https://flowjoinery.co.nz/insights/walk-in-wardrobe-design-guide.webp"
  },
  {
    label: "Furniture",
    cat: "furniture",
    img: "https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/living-room/luxury-modern-living-room-with-l-shaped-sofa-and-brass-accents/luxury-beige-sofa-living-space.jpg"
  },
  {
    label: "Complete Homes",
    cat: "home",
    img: "https://stylewellinteriordesign.com/assets/images/expertise_hero.webp"
  },
  {
    label: "False Ceilings",
    cat: "ceiling",
    img: "https://goodhomes.wwmindia.com/content/2026/may/why-false-ceilings-are-worth-considering.jpg"
  },
  {
    label: "Decorative Panels",
    cat: "panels",
    img: "https://goodhomes.wwmindia.com/content/2019/dec/kdnd--31576842113.jpg"
  },
  {
    label: "Dining Spaces",
    cat: "dining",
    img: "https://puravankara-projects.in/puravankara-codename-hennur/assets/images/banner3.jpg"
  }
];
const filters=[["all","All spaces"],["living","Living rooms"],["bedroom","Bedrooms"],["wardrobe","Wardrobes"],["kitchen","Kitchens"],["tv","TV units"],["panels","Wall panels"],["lighting","Lighting"],["ceiling","False ceilings"],["furniture","Furniture"],["dining","Dining spaces"],["home","Complete homes"]];
const filterRoot=document.getElementById("galleryFilters"),galleryRoot=document.getElementById("galleryGrid");
filters.forEach((f,i)=>{const b=document.createElement("button");b.type="button";b.className="filter-button"+(i===0?" active":"");b.textContent=f[1];b.dataset.filter=f[0];b.setAttribute("data-testid","gallery-filter-"+f[0]);b.addEventListener("click",()=>{filterRoot.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));galleryRoot.querySelectorAll(".gallery-card").forEach(card=>card.hidden=f[0]!=="all"&&card.dataset.cat!==f[0])});filterRoot.appendChild(b)});
gallery.forEach((g,i)=>{const el=document.createElement("article");el.className="gallery-card reveal";el.dataset.cat=g.cat;el.innerHTML=`<img src="${g.img}" alt="${g.label} interior design inspiration" loading="lazy"><span class="gallery-label">${g.label}</span>`;galleryRoot.appendChild(el)});
const menuToggle=document.getElementById("menuToggle"),nav=document.getElementById("mainNav");
menuToggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",String(open));menuToggle.textContent=open?"×":"☰"});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menuToggle.setAttribute("aria-expanded","false");menuToggle.textContent="☰"}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08});
function observeReveals(){document.querySelectorAll(".reveal:not(.visible)").forEach(el=>observer.observe(el))}
observeReveals();document.getElementById("year").textContent=new Date().getFullYear();

// GharVibe Interio contact details — keep all contact actions in sync.
const PHONE_NUMBER = "+919453764243";
const EMAIL_ADDRESS = "gharvibevns@gmail.com";
const WHATSAPP_NUMBER = "919453764243"; // International format, digits only.
const waLink = (number, message = "Hello GharVibe Interio, I would like to know more about your interior design services.") =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

const floatingWhatsApp = document.getElementById("whatsappFloat");
floatingWhatsApp.href = waLink(WHATSAPP_NUMBER);
floatingWhatsApp.target = "_blank";
floatingWhatsApp.rel = "noopener noreferrer";

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  const form = e.currentTarget, data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();
  const phone = (data.get("phone") || "").toString().trim();
  if (!name || !phone) {
    document.getElementById("formStatus").textContent = "Please add your name and phone number.";
    return;
  }
  const message = [
    "Hello GharVibe Interio, I'd like to enquire about an interior design project.",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Email: ${(data.get("email") || "Not provided").toString().trim()}`,
    `Requirement: ${(data.get("requirement") || "Not specified").toString().trim()}`,
    `Details: ${(data.get("message") || "Not provided").toString().trim()}`
  ].join("\n");
  document.getElementById("formStatus").textContent = "Opening WhatsApp with your enquiry…";
  window.open(waLink(WHATSAPP_NUMBER, message), "_blank", "noopener,noreferrer");
});
