const quests = window.primisQuests || [];
const mainQuests = window.primisMainQuests || [];

if (!quests.length) {
  throw new Error("Fourleaf Primis quest database failed to load.");
}

const search = document.getElementById("search");
const typeFilter = document.getElementById("typeFilter");
const regionFilter = document.getElementById("regionFilter");
const results = document.getElementById("results");
const empty = document.getElementById("empty");
const resultCount = document.getElementById("resultCount");

const params = new URLSearchParams(location.search);

[...new Set(quests.map(q => q.region))]
  .sort()
  .forEach(region => {
    regionFilter.insertAdjacentHTML(
      "beforeend",
      `<option value="${region}">${region}</option>`
    );
  });

if (params.get("region")) regionFilter.value = params.get("region");
if (params.get("type")) typeFilter.value = params.get("type");

document.getElementById("mainCount").textContent =
  quests.filter(q => q.type === "main").length;

document.getElementById("sideCount").textContent =
  quests.filter(q => q.type !== "main").length + " optional";

function questSlug(q) {
  if (q.id) {
    return String(q.id).padStart(2, "0") + "-" +
      q.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  return q.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function questUrl(q) {
  return "quests/" + questSlug(q) + ".html";
}

function render() {
  const s = search.value.toLowerCase().trim();
  const t = typeFilter.value;
  const r = regionFilter.value;

  const out = quests.filter(q =>
    (t === "all" || q.type === t) &&
    (r === "all" || q.region === r) &&
    (!s || [
      q.name,
      q.region,
      q.npc,
      q.pre,
      q.reward,
      q.objective
    ].join(" ").toLowerCase().includes(s))
  );

  results.innerHTML = out.map(q => `
    <article class="quest" data-quest-index="${quests.indexOf(q)}" style="cursor:pointer">
      <div class="quest-top">
        <span class="number">${q.id ? "MAIN #" + q.id : q.type.toUpperCase()}</span>
        <span class="tag">${q.region}</span>
      </div>
      <h3>${q.name}</h3>
      <div class="meta">👤 ${q.npc}</div>
      <div class="detail"><b>Prerequisite</b><br>${q.pre}</div>
      <div class="detail"><b>📖 Description</b><br>${q.objective}</div>
      <div class="detail reward"><b>🎁 Reward</b><br>${q.reward}</div>
    </article>
  `).join("");

  if (resultCount) {
    resultCount.textContent = out.length + " quests shown";
  }

  results.querySelectorAll(".quest").forEach(card => {
    card.addEventListener("click", () => {
      const q = quests[Number(card.dataset.questIndex)];
      if (q) location.href = questUrl(q);
    });
  });

  empty.classList.toggle("hidden", out.length !== 0);
  results.classList.toggle("hidden", out.length === 0);
}

[search, typeFilter, regionFilter].forEach(el => {
  el.addEventListener("input", render);
  el.addEventListener("change", render);
});

document.querySelectorAll(".region-card[data-region]").forEach(button => {
  button.addEventListener("click", () => {
    regionFilter.value = button.dataset.region;
    location.hash = "quests";
    render();
  });
});

const mapHost = document.getElementById("questMap");

if (mapHost) {
  mapHost.innerHTML =
    '<div class="quest-map-line"></div>' +
    mainQuests.map((q, i) => {
      const quest = quests.find(item => item.id === i + 1);
      return `
        <a class="map-node" href="${quest ? questUrl(quest) : "#"}">
          <span class="map-number">${i + 1}</span>
          <span>
            <b>${q[0]}</b>
            <small>${q[1]} • ${q[2]}</small>
          </span>
        </a>
      `;
    }).join("") +
    '<div class="map-note">❄ <b>Ice Trial branch:</b> four required side quests unlock The Trial of Ice.</div>';
}

const trackerList = document.getElementById("trackerList");

if (trackerList) {
  const key = "fourleafPrimisCompleted";
  let done = JSON.parse(localStorage.getItem(key) || "[]");

  const mainNodes = mainQuests.map((q, i) => ({
    n: i + 1,
    name: q[0],
    region: q[1],
    quest: quests.find(item => item.id === i + 1)
  }));

  function drawTracker() {
    const count = done.length;

    document.getElementById("trackerProgress").textContent =
      count + " / " + mainNodes.length;

    document.getElementById("trackerPercent").textContent =
      Math.round(count / mainNodes.length * 100) + "%";

    document.getElementById("progressFill").style.width =
      (count / mainNodes.length * 100) + "%";

    trackerList.innerHTML = mainNodes.map(q => `
      <label class="tracker-row ${done.includes(q.n) ? "completed" : ""}">
        <input type="checkbox" data-n="${q.n}" ${done.includes(q.n) ? "checked" : ""}>
        <span class="tracker-num">${q.n}</span>
        <span class="tracker-name">
          <b>${q.name}</b>
          <small>${q.region}</small>
        </span>
        ${q.quest ? '<a href="' + questUrl(q.quest) + '" onclick="event.stopPropagation()">Open</a>' : ""}
      </label>
    `).join("");

    trackerList.querySelectorAll("input").forEach(input => {
      input.onchange = () => {
        const n = Number(input.dataset.n);
        done = input.checked
          ? [...new Set([...done, n])]
          : done.filter(v => v !== n);

        localStorage.setItem(key, JSON.stringify(done));
        drawTracker();
      };
    });
  }

  document.getElementById("resetTracker").onclick = () => {
    if (confirm("Reset all Primis quest progress?")) {
      done = [];
      localStorage.removeItem(key);
      drawTracker();
    }
  };

  drawTracker();
}

const timeline = document.getElementById("timeline");

if (timeline) {
  timeline.innerHTML = mainQuests.map((q, i) => `
    <div class="step">
      <div class="n">QUEST ${i + 1}</div>
      <h3>${q[0]}</h3>
      <p>${q[1]} • ${q[2]} • Reward: ${q[4]}</p>
    </div>
  `).join("");
}

render();
