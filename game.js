const ROLES = {
  judge: "Judge",
  jury: "Jury",
  accused: "Witch / Accused Woman",
};

const CHARACTERS = {
  judge: {
    name: "Judge",
    portrait: "./assets/characters/transparent/magistrate-transparent.png",
    close: "./assets/characters/transparent/magistrate-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  magistrate: {
    name: "Judge / Magistrate",
    portrait: "./assets/characters/transparent/magistrate-transparent.png",
    close: "./assets/characters/transparent/magistrate-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  tituba: {
    name: "Tituba",
    portrait: "./assets/characters/transparent/accused-transparent.png",
    close: "./assets/characters/transparent/accused-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  sarahGood: {
    name: "Sarah Good",
    portrait: "./assets/characters/transparent/accused-transparent.png",
    close: "./assets/characters/transparent/accused-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  rebecca: {
    name: "Rebecca Nurse",
    portrait: "./assets/characters/transparent/accused-transparent.png",
    close: "./assets/characters/transparent/accused-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  abigail: {
    name: "Abigail Williams",
    portrait: "./assets/characters/transparent/jury-a-transparent.png",
    close: "./assets/characters/transparent/jury-a-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  betty: {
    name: "Betty Parris",
    portrait: "./assets/characters/transparent/jury-b-transparent.png",
    close: "./assets/characters/transparent/jury-b-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  ann: {
    name: "Ann Putnam Jr.",
    portrait: "./assets/characters/transparent/jury-b-transparent.png",
    close: "./assets/characters/transparent/jury-b-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  parris: {
    name: "Reverend Samuel Parris",
    portrait: "./assets/characters/transparent/magistrate-transparent.png",
    close: "./assets/characters/transparent/magistrate-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  jury1: {
    name: "Jury Member 1",
    portrait: "./assets/characters/transparent/jury-c-transparent.png",
    close: "./assets/characters/transparent/jury-c-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  jury2: {
    name: "Jury Member 2",
    portrait: "./assets/characters/transparent/jury-d-transparent.png",
    close: "./assets/characters/transparent/jury-d-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  villager1: {
    name: "Villager 1",
    portrait: "./assets/characters/transparent/jury-c-transparent.png",
    close: "./assets/characters/transparent/jury-c-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  villager2: {
    name: "Villager 2",
    portrait: "./assets/characters/transparent/jury-d-transparent.png",
    close: "./assets/characters/transparent/jury-d-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  villagers: {
    name: "Villagers",
    portrait: "./assets/characters/transparent/jury-a-transparent.png",
    close: "./assets/characters/transparent/jury-a-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
  clerk: {
    name: "Court Clerk",
    portrait: "./assets/characters/transparent/jury-c-transparent.png",
    close: "./assets/characters/transparent/jury-c-transparent.png",
    focusFit: "contain",
    focusPos: "center bottom",
  },
};

const CASES = {
  judge: {
    title: "The Examination of Tituba",
    scene: "./assets/scenes/scene-2-exam-angle-a.jpg",
    endImage: "./assets/scenes/scene-2-exam-angle-a.jpg",
    setting:
      "Nathaniel Ingersoll's tavern, Salem Village, March 1692. The room is crowded. Magistrates, villagers, and accusers watch closely. Candlelight flickers across handwritten court papers.",
    historicalBackground:
      "Tituba was an enslaved woman in Reverend Samuel Parris's household. In early 1692, she was one of the first three women accused of witchcraft, along with Sarah Good and Sarah Osborne.\n\nBecause of her enslaved status, gender, race, and lack of social power, Tituba was extremely vulnerable. Under pressure, she confessed to witchcraft and described the Devil, strange animals, and the Devil's book. Her confession helped intensify the panic in Salem.",
    record: [
      "Case: Tituba's examination.",
      "Location: Nathaniel Ingersoll's tavern, Salem Village.",
      "Date: March 1692.",
      "Key pressure: enslaved status, gender, race, household authority, and public panic.",
    ],
    dialogue: [
      { speaker: "judge", text: "Tituba, you stand accused of practicing witchcraft and tormenting the children of Salem. What do you say?" },
      { speaker: "tituba", text: "I have done no harm." },
      { speaker: "abigail", text: "She hurts me! Her spirit comes to me!" },
      { speaker: "betty", text: "She pinches and chokes me in the night!" },
      { speaker: "judge", text: "Tituba, these children suffer before us. Did you make a covenant with the Devil?" },
      { speaker: "tituba", text: "No. I am afraid. I do not know why they say this." },
      { speaker: "parris", text: "You live in my household. You have seen what has happened to my daughter. Tell the truth before God." },
      { speaker: "judge", text: "Did the Devil appear to you?" },
      { speaker: "tituba", text: "A man came to me. He told me to serve him." },
      { speaker: "villagers", text: "The Devil! She has seen the Devil!" },
      { speaker: "judge", text: "Did he ask you to sign his book?" },
      { speaker: "tituba", text: "Yes. He showed me a book. He told me there were other names inside." },
      { speaker: "judge", text: "Whose names?" },
      { speaker: "tituba", text: "I saw Sarah Good. I saw Sarah Osborne. There were more, but I could not read them." },
      { speaker: "abigail", text: "She speaks the truth! There are more witches in Salem!" },
      { speaker: "judge", text: "Then the danger is greater than we feared." },
    ],
    choicePrompt: "As the Judge, how do you respond?",
    choices: [
      {
        text: "Pressure Tituba for more names.",
        outcome: "Tituba gives more details under pressure. The courtroom becomes more fearful. The witch hunt expands.",
      },
      {
        text: "Question whether fear is shaping the testimony.",
        outcome: "Some villagers become suspicious of your doubt. They whisper that you are protecting witches.",
      },
      {
        text: "Accept her confession as proof of witchcraft.",
        outcome: "The confession becomes powerful evidence. The court treats the invisible threat as real.",
      },
    ],
    historicalOutcome:
      "Tituba's confession became a turning point in the Salem Witch Trials. Instead of ending the accusations, her confession made the community believe that a larger witch conspiracy existed. Unlike many who denied witchcraft and were executed, Tituba survived the trials.",
    modernEcho:
      "This case shows how people with the least power can be pressured into false or exaggerated confessions. In modern society, similar patterns can appear when vulnerable people are interrogated under fear, authority, or social pressure. Tituba's story asks players to question whether confession always means truth, especially when power is unequal.",
  },
  jury: {
    title: "The Trial of Rebecca Nurse",
    scene: "./assets/scenes/scene-3-deliberation.jpg",
    endImage: "./assets/scenes/scene-4-sentence.jpg",
    setting:
      "The Salem courtroom, June 1692. The room is tense. Some villagers support Rebecca Nurse. Others fear that even respected people may secretly serve the Devil.",
    historicalBackground:
      "Rebecca Nurse was a respected elderly woman in Salem Village. She was known as religious and honorable. Her accusation shocked the community because she did not fit the stereotype of a dangerous outsider.\n\nIn her trial, the jury first returned a verdict of not guilty. However, after public pressure and reactions from the accusers, the jury was told to reconsider. The verdict changed to guilty. Rebecca Nurse was executed on July 19, 1692.",
    record: [
      "Case: The trial of Rebecca Nurse.",
      "Location: Salem courtroom.",
      "Date: June 1692.",
      "Key pressure: public fear, afflicted accusers' reactions, and pressure on jury independence.",
    ],
    dialogue: [
      { speaker: "judge", text: "Rebecca Nurse, you are accused of practicing witchcraft and tormenting the afflicted girls of Salem. How do you plead?" },
      { speaker: "rebecca", text: "I am innocent. I have never harmed these children. I am clear before God." },
      { speaker: "abigail", text: "Her spirit came to me! She tried to make me sign the Devil's book!" },
      { speaker: "ann", text: "She hurt me. I saw her shape. She is not what she appears to be." },
      { speaker: "rebecca", text: "I am an old woman. I have lived among you for many years. You know my life. You know my faith." },
      { speaker: "villager1", text: "Rebecca Nurse is a good woman. I cannot believe this." },
      { speaker: "villager2", text: "If the Devil can hide anywhere, he can hide behind a holy face." },
      { speaker: "judge", text: "Jury, you have heard the testimony. Consider the evidence." },
      { speaker: "jury1", text: "There is no physical proof." },
      { speaker: "jury2", text: "But the afflicted girls cry out against her." },
      { speaker: "jury1", text: "Fear is not proof." },
      { speaker: "jury2", text: "In Salem, fear has become proof." },
      { speaker: "judge", text: "What is your verdict?" },
      { speaker: "jury1", text: "Not guilty." },
      { speaker: "abigail", text: "No! She is hurting us still!" },
      { speaker: "ann", text: "Her spirit is here! She is attacking us!" },
      { speaker: "villagers", text: "How can you release a witch? The children suffer! The Devil will punish Salem!" },
      { speaker: "judge", text: "Jury, reconsider your verdict." },
      { speaker: "jury1", text: "We already gave our answer." },
      { speaker: "judge", text: "Then consider again whether her words and silence have deceived you." },
      { speaker: "rebecca", text: "I have nothing more to say. I am innocent." },
    ],
    choicePrompt: "As a jury member, what do you do?",
    choices: [
      {
        text: "Keep the not guilty verdict.",
        outcome: "You resist the panic, but the courtroom turns against you. The crowd sees doubt as danger.",
      },
      {
        text: "Change the verdict to guilty under pressure.",
        outcome: "The verdict changes to guilty. Fear overpowers uncertainty.",
      },
      {
        text: "Ask for more evidence before deciding.",
        outcome: "The court grows impatient. The accusers' suffering becomes emotional pressure against you.",
      },
    ],
    historicalOutcome:
      "The jury initially found Rebecca Nurse not guilty, but the court told them to reconsider. After pressure from the courtroom and accusers, the jury changed the verdict to guilty. Rebecca Nurse was hanged on July 19, 1692.",
    modernEcho:
      "Rebecca Nurse's case shows how public pressure can distort justice. Even when a decision begins with doubt, emotional reactions, fear, and group pressure can force people to conform. This connects to modern situations where social media outrage, public labeling, or moral panic can influence judgment before evidence is fully understood.",
  },
  accused: {
    title: "The Case of Sarah Good",
    scene: "./assets/scenes/scene-1-accusation.jpg",
    endImage: "./assets/scenes/scene-4-sentence.jpg",
    setting:
      "The Salem courtroom, 1692. Sarah Good stands alone. The room is filled with villagers who already distrust her.",
    historicalBackground:
      "Sarah Good was one of the first three women accused of witchcraft in Salem. She was poor, homeless, and socially isolated. Many villagers already viewed her as strange, troublesome, or undesirable.\n\nHer poverty and outsider status made her an easy target. She was accused not because of strong evidence, but because people associated her behavior, appearance, and social position with danger.",
    record: [
      "Case: The case of Sarah Good.",
      "Location: Salem courtroom.",
      "Date: 1692.",
      "Key pressure: poverty, homelessness, social isolation, reputation, and gender bias.",
    ],
    dialogue: [
      { speaker: "magistrate", text: "Sarah Good, you are accused of witchcraft. The afflicted children say your spirit has harmed them. How do you answer?" },
      { speaker: "sarahGood", text: "I am innocent. I have done no witchcraft." },
      { speaker: "abigail", text: "She torments me! She comes to me in the night!" },
      { speaker: "ann", text: "She tried to make me sign the Devil's book!" },
      { speaker: "sarahGood", text: "They lie. I do not know why they speak against me." },
      { speaker: "villager1", text: "She came to my door begging for food. When I refused, she muttered under her breath." },
      { speaker: "villager2", text: "After she cursed me, my animal became sick." },
      { speaker: "sarahGood", text: "I was hungry. I asked for help. That is not witchcraft." },
      { speaker: "magistrate", text: "Why do so many speak against you?" },
      { speaker: "sarahGood", text: "Because I am poor. Because I have no friends here. Because no one will defend me." },
      { speaker: "clerk", text: "The accused denies all charges." },
      { speaker: "magistrate", text: "Sarah Good, do you confess?" },
      { speaker: "sarahGood", text: "No. I will not confess to a lie." },
      { speaker: "abigail", text: "She is hurting me now!" },
      { speaker: "villagers", text: "The accusers cry out. The courtroom turns toward Sarah." },
    ],
    choicePrompt: "As Sarah Good, how do you respond?",
    choices: [
      {
        text: "Continue denying the accusation.",
        outcome: "You keep your innocence, but the court treats your denial as defiance.",
      },
      {
        text: "Confess falsely to survive.",
        outcome: "The court listens more closely. Confession may save your life, but it spreads the panic.",
      },
      {
        text: "Accuse someone else to redirect suspicion.",
        outcome: "Fear moves from you to another person. The system rewards accusation, not truth.",
      },
    ],
    historicalOutcome:
      "Sarah Good denied the charges against her. She was convicted and executed by hanging on July 19, 1692. Her case shows how poverty, reputation, and gender bias made certain women more vulnerable to accusation.",
    modernEcho:
      "Sarah Good's case shows how society often targets people who are poor, isolated, or seen as different. In modern life, people can still be judged through stereotypes instead of evidence. Her story connects to issues like class bias, gender bias, public shaming, and the way communities sometimes blame vulnerable people during moments of fear.",
  },
};

const state = {
  role: null,
  dialogueIndex: 0,
  dialogueDone: false,
  chosen: null,
};

const introScreen = document.getElementById("intro-screen");
const chooseRoleBtn = document.getElementById("choose-role-btn");
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const scenePanel = document.querySelector(".scene-panel");
const dialogueStage = document.getElementById("dialogue-stage");
const sceneContinueBtn = document.getElementById("scene-continue-btn");
const narrativeEl = document.getElementById("narrative");
const evidenceList = document.getElementById("evidence-list");
const choicesEl = document.getElementById("choices");
const chapterTag = document.getElementById("chapter-tag");
const roleTag = document.getElementById("role-tag");
const sceneImage = document.getElementById("scene-image");
const sceneCaption = document.getElementById("scene-caption");
const finalVerdict = document.getElementById("final-verdict");
const reflection = document.getElementById("reflection");
const restartBtn = document.getElementById("restart-btn");
const roleButtons = document.querySelectorAll(".role-btn");
const actContent = document.getElementById("act-content");
const dialogueBgImage = document.getElementById("dialogue-bg-image");
const speakerFocusImage = document.getElementById("speaker-focus-image");
const characterRow = document.getElementById("character-row");
const speakerName = document.getElementById("speaker-name");
const dialogueLine = document.getElementById("dialogue-line");
const nextLineBtn = document.getElementById("next-line-btn");
const bgmAudio = document.getElementById("bgm-audio");
const dialogueBox = document.querySelector(".dialogue-box");

const timers = {};
const BGM_TARGET_VOLUME = 0.42;
const BGM_FADE_MS = 1800;
const BGM_RESTART_MARGIN = 2.1;
let bgmStarted = false;
let bgmRestarting = false;
let bgmUnlockBound = false;

chooseRoleBtn.addEventListener("click", () => {
  startBgm();
  introScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
});

roleButtons.forEach((btn) => {
  btn.addEventListener("pointermove", (event) => {
    const rect = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${event.clientX - rect.left}px`);
    btn.style.setProperty("--y", `${event.clientY - rect.top}px`);
  });

  btn.addEventListener("click", () => {
    startBgm();
    startGame(btn.dataset.role);
  });
});

restartBtn.addEventListener("click", resetGame);
nextLineBtn.addEventListener("click", goToNextDialogueLine);
sceneContinueBtn.addEventListener("click", () => {
  startBgm();
  startDialoguePhase();
});

if (bgmAudio) {
  bgmAudio.autoplay = true;
  bgmAudio.loop = false;
  bgmAudio.playsInline = true;
  bgmAudio.volume = 0;
  bgmAudio.addEventListener("timeupdate", handleBgmTimeUpdate);
  bgmAudio.addEventListener("ended", restartBgmWithFade);
  requestAnimationFrame(startBgm);
  window.addEventListener("load", startBgm, { once: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
      startBgm();
    }
  });
}

function currentCase() {
  return CASES[state.role];
}

function startGame(role) {
  state.role = role;
  state.dialogueIndex = 0;
  state.dialogueDone = false;
  state.chosen = null;
  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  renderCurrentCase();
}

function renderCurrentCase() {
  const trialCase = currentCase();
  roleTag.textContent = `Role: ${ROLES[state.role]}`;
  chapterTag.textContent = trialCase.title;
  sceneImage.src = trialCase.scene;
  sceneCaption.textContent = trialCase.setting;

  actContent.classList.add("hidden");
  choicesEl.innerHTML = "";
  evidenceList.innerHTML = "";
  narrativeEl.textContent = "";

  state.dialogueIndex = 0;
  state.dialogueDone = false;
  nextLineBtn.disabled = false;
  nextLineBtn.textContent = "Next testimony";
  sceneContinueBtn.disabled = false;
  sceneContinueBtn.textContent = "Enter court dialogue";

  scenePanel.classList.remove("hidden");
  dialogueStage.classList.add("hidden");
  replayClass(scenePanel, "scene-enter");
}

function renderDialogueLine(line) {
  const trialCase = currentCase();
  const character = CHARACTERS[line.speaker] || CHARACTERS.villagers;
  dialogueBgImage.src = trialCase.scene;
  speakerName.textContent = character.name;
  speakerFocusImage.src = character.close;
  speakerFocusImage.dataset.speaker = line.speaker;
  speakerFocusImage.style.objectFit = character.focusFit || "cover";
  speakerFocusImage.style.objectPosition = character.focusPos || "center";
  speakerFocusImage.classList.remove("zoom-pop");
  void speakerFocusImage.offsetWidth;
  speakerFocusImage.classList.add("zoom-pop");
  replayClass(dialogueStage, "dialogue-pulse");
  replayClass(dialogueBox, "dialogue-lift");
  replayClass(speakerName, "name-pop");
  replayClass(dialogueLine, "line-reveal");

  renderCharacterRow(line.speaker);
  typeText(dialogueLine, line.text, 12, "dialogue");
}

function startDialoguePhase() {
  const trialCase = currentCase();
  scenePanel.classList.add("hidden");
  dialogueStage.classList.remove("hidden");
  renderDialogueLine(trialCase.dialogue[state.dialogueIndex]);
}

function renderCharacterRow(activeSpeaker) {
  characterRow.innerHTML = "";

  Object.entries(CHARACTERS).forEach(([id, character]) => {
    const card = document.createElement("div");
    card.className = `character-pill${id === activeSpeaker ? " is-speaking" : ""}`;

    const img = document.createElement("img");
    img.src = id === activeSpeaker ? character.close : character.portrait;
    img.alt = `${character.name} portrait`;
    img.style.objectFit = character.focusFit || "cover";
    img.style.objectPosition = character.focusPos || "center 40%";

    const label = document.createElement("span");
    label.textContent = character.name;

    card.appendChild(img);
    card.appendChild(label);
    characterRow.appendChild(card);
  });
}

function goToNextDialogueLine() {
  const trialCase = currentCase();
  if (state.dialogueDone) {
    return;
  }

  if (state.dialogueIndex < trialCase.dialogue.length - 1) {
    state.dialogueIndex += 1;
    renderDialogueLine(trialCase.dialogue[state.dialogueIndex]);
    return;
  }

  finishDialoguePhase(trialCase);
}

function finishDialoguePhase(trialCase) {
  state.dialogueDone = true;
  nextLineBtn.disabled = true;
  nextLineBtn.textContent = "Dialogue complete";
  actContent.classList.remove("hidden");

  typeText(narrativeEl, trialCase.historicalBackground, 10, "narrative");
  renderRecordAndChoices(trialCase);
}

function renderRecordAndChoices(trialCase) {
  evidenceList.innerHTML = "";
  trialCase.record.forEach((line) => {
    const li = document.createElement("li");
    li.textContent = line;
    evidenceList.appendChild(li);
  });

  choicesEl.innerHTML = "";
  const prompt = document.createElement("p");
  prompt.className = "choice-prompt";
  prompt.textContent = trialCase.choicePrompt;
  choicesEl.appendChild(prompt);

  trialCase.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.textContent = `${String.fromCharCode(65 + idx)}. ${choice.text}`;
    btn.style.animationDelay = `${idx * 80}ms`;
    btn.addEventListener("click", () => applyChoice(choice, btn));
    choicesEl.appendChild(btn);
  });
}

function applyChoice(choice, selectedButton) {
  state.chosen = choice;
  if (!selectedButton) {
    finishGame(choice);
    return;
  }

  choicesEl.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.disabled = true;
    btn.classList.toggle("is-selected", btn === selectedButton);
    btn.classList.toggle("is-muted", btn !== selectedButton);
  });

  setTimeout(() => finishGame(choice), 320);
}

function finishGame(choice) {
  const trialCase = currentCase();
  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
  document.querySelector(".end-image").src = trialCase.endImage;

  finalVerdict.textContent = `${trialCase.title}\n\nYour choice: ${choice.text}\n\nImmediate outcome: ${choice.outcome}\n\nHistorical outcome: ${trialCase.historicalOutcome}`;

  reflection.textContent =
    `Modern echo:\n${trialCase.modernEcho}\n\n` +
    "The Salem Witch Trials were not only about witchcraft. They were about fear, power, gender, and social control.\n\n" +
    "Tituba's case shows how vulnerable people can be pressured by authority.\n" +
    "Rebecca Nurse's case shows how public fear can overturn justice.\n" +
    "Sarah Good's case shows how poverty and gender bias can make someone a target.\n\n" +
    "Together, these cases reveal a dangerous pattern:\n" +
    "When fear becomes stronger than evidence, injustice becomes easier to justify.";
}

function resetGame() {
  endScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  startScreen.classList.add("hidden");
  introScreen.classList.remove("hidden");

  Object.keys(timers).forEach((key) => {
    clearInterval(timers[key]);
    delete timers[key];
  });
}

function startBgm() {
  if (!bgmAudio) {
    return;
  }

  if (bgmStarted && !bgmAudio.paused) {
    return;
  }

  bgmStarted = true;
  bgmAudio
    .play()
    .then(() => fadeBgmTo(BGM_TARGET_VOLUME, BGM_FADE_MS))
    .catch(() => {
      bgmStarted = false;
      bindBgmUnlock();
    });
}

function bindBgmUnlock() {
  if (bgmUnlockBound) {
    return;
  }

  bgmUnlockBound = true;
  const unlock = () => {
    bgmUnlockBound = false;
    document.removeEventListener("pointerdown", unlock);
    document.removeEventListener("keydown", unlock);
    document.removeEventListener("touchstart", unlock);
    startBgm();
  };

  document.addEventListener("pointerdown", unlock, { once: true });
  document.addEventListener("keydown", unlock, { once: true });
  document.addEventListener("touchstart", unlock, { once: true });
}

function handleBgmTimeUpdate() {
  if (!bgmAudio || bgmRestarting || !Number.isFinite(bgmAudio.duration)) {
    return;
  }

  const timeLeft = bgmAudio.duration - bgmAudio.currentTime;
  if (timeLeft <= BGM_RESTART_MARGIN && bgmAudio.currentTime > BGM_RESTART_MARGIN) {
    restartBgmWithFade();
  }
}

function restartBgmWithFade() {
  if (!bgmAudio || bgmRestarting || !bgmStarted) {
    return;
  }

  bgmRestarting = true;
  fadeBgmTo(0, BGM_FADE_MS).then(() => {
    bgmAudio.currentTime = 0;
    bgmAudio
      .play()
      .then(() => fadeBgmTo(BGM_TARGET_VOLUME, BGM_FADE_MS))
      .finally(() => {
        bgmRestarting = false;
      });
  });
}

function fadeBgmTo(targetVolume, duration) {
  if (!bgmAudio) {
    return Promise.resolve();
  }

  if (timers.bgmFade) {
    clearInterval(timers.bgmFade);
    delete timers.bgmFade;
  }

  const startVolume = bgmAudio.volume;
  const startedAt = performance.now();
  const target = Math.max(0, Math.min(1, targetVolume));

  return new Promise((resolve) => {
    timers.bgmFade = setInterval(() => {
      const progress = Math.min((performance.now() - startedAt) / duration, 1);
      bgmAudio.volume = startVolume + (target - startVolume) * progress;

      if (progress >= 1) {
        clearInterval(timers.bgmFade);
        delete timers.bgmFade;
        resolve();
      }
    }, 40);
  });
}

function replayClass(el, className) {
  if (!el) {
    return;
  }

  el.classList.remove(className);
  void el.offsetWidth;
  el.classList.add(className);
}

function typeText(el, text, speed = 18, key = "default") {
  if (timers[key]) {
    clearInterval(timers[key]);
    delete timers[key];
  }

  el.textContent = "";
  let index = 0;

  timers[key] = setInterval(() => {
    el.textContent += text[index];
    index += 1;
    if (index >= text.length) {
      clearInterval(timers[key]);
      delete timers[key];
    }
  }, speed);
}
