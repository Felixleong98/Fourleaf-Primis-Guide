const quests = window.primisQuests || [];
const mainQuests = window.primisMainQuests || [];

const search = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const regionFilter = document.getElementById("regionFilter");
const results = document.getElementById("results");
const empty = document.getElementById("empty");
const resultCount = document.getElementById("resultCount");

function questSlug(q) {
  if (q.id) return String(q.id).padStart(2, "0") + "-" + q.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return q.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
function questUrl(q) { return "quests/" + questSlug(q) + ".html"; }

if (quests.length && search && typeFilter && regionFilter && results) {
  const params = new URLSearchParams(location.search);
  [...new Set(quests.map(q => q.region))].sort().forEach(region => {
    regionFilter.insertAdjacentHTML("beforeend", '<option value="' + region + '">' + region + '</option>');
  });
  if (params.get("region")) regionFilter.value = params.get("region");
  if (params.get("type")) typeFilter.value = params.get("type");

  const mainCount = document.getElementById("mainCount");
  const sideCount = document.getElementById("sideCount");
  if (mainCount) mainCount.textContent = quests.filter(q => q.type === "main").length;
  if (sideCount) sideCount.textContent = quests.filter(q => q.type !== "main").length + " optional";

  function render() {
    const s = search.value.toLowerCase().trim(), t = typeFilter.value, r = regionFilter.value;
    const out = quests.filter(q =>
      (t === "all" || q.type === t) &&
      (r === "all" || q.region === r) &&
      (!s || [q.name,q.region,q.npc,q.pre,q.reward,q.objective].join(" ").toLowerCase().includes(s))
    );
    results.innerHTML = out.map(q => '<article class="quest" data-quest-index="' + quests.indexOf(q) + '" style="cursor:pointer">' +
      '<div class="quest-top"><span class="number">' + (q.id ? "MAIN #" + q.id : q.type.toUpperCase()) + '</span><span class="tag">' + q.region + '</span></div>' +
      '<h3>' + q.name + '</h3><div class="meta">👤 ' + q.npc + '</div>' +
      '<div class="detail"><b>Prerequisite</b><br>' + q.pre + '</div>' +
      '<div class="detail"><b>📖 Description</b><br>' + q.objective + '</div>' +
      '<div class="detail reward"><b>🎁 Reward</b><br>' + q.reward + '</div></article>').join("");
    if (resultCount) resultCount.textContent = out.length + " quests shown";
    results.querySelectorAll(".quest").forEach(card => card.addEventListener("click", () => {
      const q = quests[Number(card.dataset.questIndex)];
      if (q) location.href = questUrl(q);
    }));
    if (empty) empty.classList.toggle("hidden", out.length !== 0);
    results.classList.remove("hidden");
  }
  [search,typeFilter,regionFilter].forEach(el => {
    el.addEventListener("input", render);
    el.addEventListener("change", render);
  });
  document.querySelectorAll(".region-card[data-region]").forEach(button => button.addEventListener("click", () => {
    regionFilter.value = button.dataset.region;
    location.hash = "quests";
    render();
  }));
  render();
}

const mapHost = document.getElementById("questMap");
if (mapHost && mainQuests.length && quests.length) {
  mapHost.innerHTML = '<div class="quest-map-line"></div>' + mainQuests.map((q,i) => {
    const quest = quests.find(item => item.id === i + 1);
    return '<a class="map-node" href="' + (quest ? questUrl(quest) : "#") + '"><span class="map-number">' + (i+1) + '</span><span><b>' + q[0] + '</b><small>' + q[1] + ' • ' + q[2] + '</small></span></a>';
  }).join("") + '<div class="map-note">❄ <b>Ice Trial branch:</b> four required side quests unlock The Trial of Ice.</div>';
}

const worldMapLightbox = document.getElementById("worldMapLightbox");
const openWorldMap = document.getElementById("openWorldMap");
const closeWorldMap = document.getElementById("closeWorldMap");
if (worldMapLightbox && openWorldMap && closeWorldMap) {
  const closeMap = () => {
    worldMapLightbox.hidden = true;
    document.body.style.overflow = "";
  };
  openWorldMap.addEventListener("click", () => {
    worldMapLightbox.hidden = false;
    document.body.style.overflow = "hidden";
  });
  closeWorldMap.addEventListener("click", closeMap);
  worldMapLightbox.addEventListener("click", (event) => {
    if (event.target === worldMapLightbox) closeMap();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !worldMapLightbox.hidden) closeMap();
  });
}
