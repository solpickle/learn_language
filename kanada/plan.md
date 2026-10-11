> **Current status — 2026-10-11:** Day 1 implemented on `feature/kannada-day-1` in `solpickle/learn_language`. The first full lesson lives at `/kanada/day-1/`; generated MP3s are committed with the lesson. Day 2–7 remain planned. Fluent-speaker language/audio review and phone testing remain open. The older migration and imsank notes below are historical.

> **Migration update — 2026-10-11:** The app and plans now live at C:\Users\sanka\work\learn_language\kanada. This folder is the source of truth. The imsank.github.io integration is being removed; prior paths/hosting milestones below are historical. New hosting details are pending. See dev_setup.md for current commands and layout.

# Spoken Kannada for Bengaluru --- V1 Planning Specification

## Active implementation checklist

### Resume status — 2026-10-11

- [x] Verify compact prototype commit `f7738de` is included in fetched `origin/master`.
- [x] Create the requested next-iteration branch `feature/learn-kannada_v2` from latest remote master (local only so far).
- [ ] Add word-by-word explanations and reusable substitutions: distinguish `neeru` (water) from `beku` (want/need), then show how other items fit the same pattern. Use beginner-friendly labels and verify precise grammar before teaching formal classifications.
- [ ] Build the first full Day 1 lesson, then expand through Day 7.

The current app remains the five-phrase audio prototype. Generated sample audio was approved by the user; compact styling was merged. No complete daily lessons or progress tracking have been implemented yet. Phone testing is not recorded as completed.

### Audio approach update — Python-generated recordings

- [x] Verify the supplied Python environment (actual folder: `ds_310`).
- [x] Install `edge-tts==7.2.8` into an isolated local environment.
- [x] Generate all five prototype phrases with `kn-IN-SapnaNeural` and save a provenance manifest.
- [x] Add the generator script and MP3s to the website working tree; use saved audio by default without requiring an installed Kannada voice.
- [x] Verify generated audio plays through completion in the in-app browser; check cancellation/error handling with controller tests and rebuild Jekyll.
- [x] User checks the sample audio is audible and comfortable to follow (approved 2026-09-27).
- [ ] Obtain fluent-speaker review of Kannada phrasing and pronunciation before calling the content polished.

This supersedes browser-only audio as the default. Python needs internet to generate audio; the published app plays the saved MP3s. Keep browser TTS as an optional comparison. See `dev_setup.md` for regeneration commands. The remaining hosting checklist below still applies.

Updated: 2026-09-27. This checklist records our latest agreed scope and takes
precedence over conflicting recommendations below: use simple HTML/CSS/JavaScript
in the existing Jekyll site, publish the TTS prototype first, and expand only to
Days 1–7 after validating audio. The 30-day curriculum remains future reference.
See `dev_setup.md` for verified paths, branch, and development workflow.

Mark an item `[x]` only when complete. Record test results and remaining issues
under the relevant milestone. On resuming, start with the first unchecked item;
check the repository branch and working tree before making changes.

### 0. Development setup

- [x] Read the product specification and inspect the existing GitHub Pages site.
- [x] Keep plans in `C:\Users\sanka\work\learn_kanada_app` and application code in `C:\Users\sanka\work\git_imsank\imsank.github.io`.
- [x] Fetch latest `origin/master` and create `feature/learn-kannada` (base `561a630`).
- [x] Record the development agreement in `dev_setup.md`.
- [x] Agree on Hobby -> Learn Kannada navigation and a Days 1–7 MVP.

### 1. Build a simple Kannada TTS prototype

- [x] Create a small HTML page at `/hobby/learn-kannada/` with supporting CSS and JavaScript; keep speech logic in one module.
- [x] Add five representative Kannada phrases with script, romanization, and English meaning.
- [x] Detect voices on startup and after `voiceschanged`; prefer `kn-IN`, then another Kannada voice.
- [x] Display voice availability and selection; show a friendly fallback when Kannada audio is unavailable, without substituting English speech.
- [x] Add play, stop, and 0.6x / 0.8x / 1.0x speed controls; prevent overlapping audio and handle speech errors.
- [ ] Complete real Kannada playback checks in a browser with a Kannada voice. Mock speech tests passed, but actual playback, stopping, and repeated clicks still need a real voice.
- [x] Check readable Kannada, keyboard controls, and layouts at laptop and phone widths.

Validation (2026-09-27): six Node speech tests passed; JavaScript syntax and Jekyll build passed. Browser checks verified the no-Kannada-voice fallback, refresh, speed controls, keyboard focus, readable Kannada, and 360/430/1280px layouts. The Codex in-app browser has no Kannada voice; pronunciation and real playback remain unverified. Tests: `node --test tests/kannada-speech.test.mjs` from the website repository.

### 2. Host the prototype and test real audio

- [x] Add the Hobby navigation tab and `/hobby/` directory with Learn Kannada as its first link.
- [x] Run the existing Jekyll build and verify the prototype's links and assets under its hosted path.
- [x] Review the scoped changes, commit and push the feature branch, then merge to `master` to publish the prototype through the existing GitHub Pages workflow.
- [x] Verify the deployment succeeded and the live Hobby -> Learn Kannada navigation works.
- [ ] User tests the hosted prototype on their laptop/browser: listen to all sample phrases at each speed and assess pronunciation and clarity.
- [ ] User tests the hosted prototype on their phone: record voice availability, playback, and usability separately from laptop results.
- [ ] Fix issues found during testing and republish as needed.
- [x] Record an explicit audio decision: satisfactory for the MVP, or blocked pending a better audio approach. Proceed to full lessons only when satisfactory.

Audio test record (fill in after testing):

| Device / browser | Kannada voice | Playback and speed | User pronunciation assessment | Issues / next action |
| --- | --- | --- | --- | --- |
| Laptop — pending | Not tested | Not tested | Pending | Build and publish prototype |
| Phone — pending | Not tested | Not tested | Pending | Test after publication |

Prototype URL: https://imsank.github.io/hobby/learn-kannada/ (live; deployment verified 2026-09-27). User approved the generated sample audio on 2026-09-27; real phone testing and fluent-speaker language review remain pending.

### 3. Build one complete learning day after audio approval

- [x] Separate lesson/story content from presentation using simple local data files.
- [x] Build Day 1 end to end: objective, phrase cards, pattern, dialogue, story, listening questions, and real-world mission.
- [x] Add phrase and dialogue audio using the tested speech module.
- [x] Add story sentence playback, Play All, active sentence highlighting, stop, and speed controls.
- [x] Add English/romanization hide and reveal controls and an audio-first listening mode.
- [x] Add quiz answer feedback, replay, and answer reveals.
- [x] Add local progress/preferences persistence with a graceful storage-failure fallback.
- [ ] Test Day 1 locally and on the hosted site; record feedback and improve it before expanding content.

### 4. Expand to Days 1–7 only

- [ ] Polish Day 1: greetings and survival Kannada.
- [ ] Add Day 2: want / don't want.
- [ ] Add Day 3: price and quantity.
- [ ] Add Day 4: location and directions.
- [ ] Add Day 5: review and mini conversation.
- [ ] Add Day 6: grocery shopping (finalize the specific phrases before authoring).
- [ ] Add Day 7: vegetables and quantities (finalize the specific phrases before authoring).
- [ ] Provide a short story and 3–5 listening questions for each day, reusing known vocabulary.
- [ ] Add one simple deterministic shop role-play using learned phrases.
- [ ] Review Kannada, English meanings, and romanization for consistency; flag uncertain content and listen to new audio before marking content polished.

### 5. Iterate and finish the seven-day MVP

- [ ] Add simple Home, Learn, Stories, Practice, Progress, and Settings navigation as needed by the seven-day experience.
- [ ] Verify lesson/story completion and preferences survive reload; keep progress separate per browser.
- [ ] Check no-voice, speech-error, missing-content, and storage-failure states.
- [ ] Check phone widths (360–430px), laptop layout, touch targets, keyboard access, and contrast.
- [ ] Run relevant data, scoring, storage, speech, and site-build checks; record results.
- [ ] Publish the updated MVP and test the real learning flow on laptop and phone.
- [ ] Record remaining improvements here as concrete unchecked items; do not expand into a 30-day course yet.

### Session handoff

Current next action: user tests the published prototype on their phone; implementation can proceed to one complete Day 1 lesson. Audio accepted by the user on 2026-09-27.
Prototype committed as 5b50cb9 and pushed to feature/learn-kannada and master; deployment succeeded and live navigation/audio were verified. Local preview: http://127.0.0.1:4173/hobby/learn-kannada/ (requires the preview server to remain running). Update this section and
`dev_setup.md` after each work session with completed work, validation results,
blockers, and the next unchecked task. Hosting the prototype is now part of the
initial iteration, rather than being deferred until the complete MVP.

------------------------------------------------------------------------

## 1. Project Overview

### Working name

**Kannada Everyday**\
Alternative internal names: `spoken-kannada`, `namma-kannada`,
`kannada-survival`.

### Product goal

Build a lightweight, mobile-friendly HTML web application that helps an
adult who already speaks English, Hindi, and Bengali learn **functional
spoken Kannada for everyday life in Bengaluru**.

The product is deliberately **not** a traditional Kannada grammar
course.

Primary outcome:

> After consistent use, the learner should be able to understand and
> participate in simple everyday Kannada interactions with shopkeepers,
> BMTC conductors, auto/cab drivers, restaurant staff, apartment
> security, delivery workers, neighbours, and traffic police.

Secondary outcome:

> The learner should gradually become comfortable listening to short
> Kannada passages about familiar and interesting topics such as nature,
> Bengaluru, cricket, football, science, space, technology, and daily
> life.

V1 should work as a **static/local web app** with no backend required.

------------------------------------------------------------------------

# 2. Target User

The initial learner: - lives in Bengaluru; - knows English, Hindi, and
Bengali; - does not need formal Kannada literacy initially; - wants
practical spoken Kannada; - needs pronunciation and listening
practice; - has roughly 10--15 minutes/day; - prefers situations and
stories over grammar textbooks.

Target proficiency is **survival/conversational Kannada**, not academic
fluency.

Successful outcomes include asking prices and quantities, using
buses/autos, giving directions, ordering food, handling
delivery/security interactions, speaking politely to traffic police,
understanding numbers/amounts, saying "I know only a little Kannada",
asking someone to repeat/speak slowly, and understanding the gist of a
simple spoken passage.

------------------------------------------------------------------------

# 3. Core Learning Philosophy

## 3.1 Spoken language first

Priority: **Listening → Understanding → Speaking → Reading script →
Writing**.

Kannada script is visible, but script mastery is not required to
progress through V1.

## 3.2 Patterns over memorization

Do not create 500 unrelated sentences. Teach reusable building blocks: -
`beku` --- want / need - `beda` --- don't want / no need - `gottu` ---
know - `gottilla` --- don't know - `ide` --- exists / is available -
`ideya?` --- is there? / do you have? - `eshtu?` --- how much? - `elli?`
--- where? - `illi` --- here - `alli` --- there - `kodi` --- please
give - `banni` --- please come - `hogi` --- please go - `nillisi` ---
please stop - `swalpa` --- a little

## 3.3 Real Bengaluru Kannada

Prefer natural, polite, everyday Kannada. Avoid overly literary
language. Where useful, distinguish a full/formal expression from the
common spoken version, but do not overload beginners with variants.

## 3.4 Audio is first-class

Every important Kannada phrase and every article sentence should be
playable. Audio is the pronunciation authority; transliteration is only
a learner aid.

## 3.5 Familiar context before difficult listening

For articles: English first → bilingual → Kannada + audio → hide English
→ audio-only comprehension.

## 3.6 Keep it interesting

Mix practical Kannada with short articles on trees, rain, sky,
Bengaluru, cricket, IPL, EPL, space, ISRO, planets, railways, UPI,
technology, AI, animals, food, festivals, and city life.

------------------------------------------------------------------------

# 4. Product Structure

## Track A --- Survival Kannada

Situation-based spoken Kannada: shop, grocery, vegetable market,
restaurant, BMTC, auto, cab, directions, apartment/security, delivery,
traffic police, pharmacy, and basic social interactions.

## Track B --- Kannada Stories

Short bilingual listening passages. Early: \~5 sentences. Middle: 6--8.
Later: 8--10.

## Track C --- Review / Listening Challenges

Quizzes and deterministic role-play using previously learned material.

------------------------------------------------------------------------

# 5. 30-Day Curriculum

## Days 1--5 --- Foundation

Greetings; yes/no; want/don't want; know/don't know; here/there/where;
how much; give; numbers 1--10; politeness.

Stories: The Sky, A Tree, The Sun, Rain, My Morning. Day 5 is
review-heavy.

## Days 6--10 --- Shopping and Food

Grocery, vegetables, price, quantity, UPI/cash, restaurant, tea/coffee,
parcel/takeaway.

Patterns include `idu eshtu?`, `ondu kodi`, `eradu kodi`,
`swalpa kammi maadi`, `bill kodi`, `parcel maadi`, `beda`, `saaku`.

Stories: Mango, Tea, Bengaluru Rain, Cricket, A Small Shop. Day 10
review.

## Days 11--15 --- Transport

BMTC, bus stop, destination, ticket, auto, cab, directions.
Left/right/straight/ahead/behind/near/far/stop here/does this go to...?
Stories: A Bus Journey, Bengaluru Traffic, Indian Railways, A Bicycle,
Traffic Signals.

## Days 16--20 --- Bengaluru Daily Life

Apartment security, delivery, maintenance, neighbours, asking for help,
simple phone interaction. Stories: Bengaluru, A Park, Trees in a City,
UPI, A Weekend.

## Days 21--25 --- Handling Problems

Traffic police, wrong direction, missing item, repeat, speak slowly, "I
understand only a little Kannada", basic pharmacy interactions. Stories:
Road Safety, GPS, Moon, ISRO.

## Days 26--30 --- Conversation

Longer shop/bus/auto/restaurant/apartment dialogues and mixed listening.
Stories: Cricket Match, Premier League Football, Space Exploration,
Technology in Bengaluru, A Day in Bengaluru. Day 30 includes a mixed
survival challenge and course summary.

------------------------------------------------------------------------

# 6. Daily Lesson Template

Target: **10--15 minutes**.

## 6.1 Today's Goal

One short sentence: e.g. "Today you will learn how to buy vegetables and
ask the price."

## 6.2 Core Expressions

5--7 phrase cards. Each contains Kannada script, romanized
pronunciation, English meaning, optional Hindi hint, audio, speed
control, and optional usage note.

## 6.3 Pattern of the Day

One reusable concept, e.g. `ಬೇಕು — beku — want / need`, followed by 2--4
examples. Explain without unnecessary grammar terminology.

## 6.4 Mini Dialogue

A realistic short dialogue with per-line audio. English and
transliteration can be hidden.

## 6.5 Kannada Story

One bilingual short article.

## 6.6 Listening Challenge

3--5 audio-first questions.

## 6.7 Real-World Mission

One tiny task, e.g. "Try saying Beda instead of 'No thanks' once today."

------------------------------------------------------------------------

# 7. Kannada Story Specification

Each story has title, category, difficulty, sentence-aligned
English/Kannada, transliteration, sentence audio, Play All, speed
control, optional vocabulary, and 2--4 comprehension questions.

Example data:

``` json
{
  "id": "story-sky-01",
  "title": "The Sky",
  "difficulty": 1,
  "topic": "nature",
  "sentences": [
    {
      "id": "sky-1",
      "english": "The sky looks blue during the day.",
      "kannada": "ಹಗಲಿನಲ್ಲಿ ಆಕಾಶ ನೀಲಿ ಬಣ್ಣದಲ್ಲಿ ಕಾಣುತ್ತದೆ.",
      "romanized": "Hagalinalli aakasha neeli bannadalli kaanuttade."
    }
  ]
}
```

### Four story modes

1.  **Bilingual** --- English + Kannada + romanization + audio.
2.  **Kannada Focus** --- hide English.
3.  **Reading Challenge** --- Kannada only; reveal helpers on demand.
4.  **Listening Challenge** --- text hidden; play audio; answer; reveal
    Kannada/romanization/English.

Clicking a sentence should play only that sentence.

------------------------------------------------------------------------

# 8. Audio / Text-to-Speech Architecture

Audio quality is critical.

## V1

Use browser Web Speech API:

``` javascript
window.speechSynthesis
SpeechSynthesisUtterance
```

Set Kannada utterances to:

``` javascript
utterance.lang = "kn-IN";
```

## Voice detection

On startup: 1. call `speechSynthesis.getVoices()`; 2. handle
`voiceschanged`; 3. prefer `kn-IN`, otherwise a voice whose language
starts with `kn`; 4. save selected/preferred voice; 5. expose voice
status in Settings.

Pseudo-code:

``` javascript
const kannadaVoices = voices.filter(v =>
  v.lang.toLowerCase().startsWith("kn")
);
```

## Fallback

If no Kannada voice exists, show a friendly warning. Never silently use
an English voice for Kannada.

## Speeds

Required: **0.6×, 0.8×, 1.0×**. Map to `SpeechSynthesisUtterance.rate`.
Note that perceived rate varies by engine.

## Controls

Phrase: Play, stop/replay, speed.

Story: play sentence, Play All, stop/pause where reliable,
previous/next, speed. Highlight current sentence during Play All and
scroll it into view when useful.

## Architecture rule

Centralize speech in `src/audio/speech.ts`. Suggested API:

``` typescript
getKannadaVoices()
speakKannada(text, options)
stopSpeech()
speakSequence(sentences, options)
```

Never duplicate TTS logic in components.

------------------------------------------------------------------------

# 9. Transliteration

Romanization is required in V1 and should be readable, consistent, and
speaking-oriented rather than overly academic. IPA is not required for
ordinary lessons.

Global setting: `Show pronunciation guide: ON/OFF`, default ON.

Audio remains the authoritative pronunciation reference.

------------------------------------------------------------------------

# 10. Hindi Bridge

Hindi hints are optional and should be used only when they make sentence
structure easier to grasp.

Example mental bridge: English: I need to go to Majestic.\
Hindi: Mujhe Majestic jaana hai.\
Kannada: Nanage Majestic-ge hogabeku.

Global setting: `Hindi hints: OFF/ON`, default OFF.

------------------------------------------------------------------------

# 11. UI / UX

The app should feel like a lightweight learning product, not a textbook:
clean, large touch targets, mobile-first, readable Kannada, obvious
audio controls, short sections, visible progress.

Primary navigation: `Home | Learn | Stories | Practice | Progress`

Settings can be reached from Home/header.

### Home

Show current day, Continue Learning, Today's Story, Quick Practice, and
progress.

### Learn

Day cards with completed/current/available states. Avoid strict locking
in V1.

### Stories

Filters such as Beginner, Intermediate, Nature, Bengaluru, Cricket,
Football, Space, Science, Technology, Daily Life.

### Practice

Listening, Meaning, Phrase Review, Role-play.

### Settings

Romanization, English translation, Hindi hints, speech rate, preferred
Kannada voice, reset progress.

------------------------------------------------------------------------

# 12. Mobile-First

Design for roughly **360--430 px** first, then desktop.

Requirements: - no horizontal scroll; - comfortable touch buttons; -
audio controls thumb-friendly; - Kannada text large enough; - avoid
dense mobile tables; - vertically stacked cards; - accessible
navigation.

------------------------------------------------------------------------

# 13. Recommended Stack

**React + Vite + TypeScript**, simple CSS/CSS modules, local TS/JSON
content, localStorage, Web Speech API.

Do not add a backend, Redux, authentication, or heavy frameworks in V1.

Bootstrap example:

``` bash
npm create vite@latest kannada-everyday -- --template react-ts
npm install
npm run dev
```

------------------------------------------------------------------------

# 14. Proposed Repository Structure

``` text
kannada-everyday/
├── README.md
├── planning.md
├── package.json
├── vite.config.ts
├── public/
│   └── icons/
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── components/
│   │   ├── AudioButton.tsx
│   │   ├── SpeedControl.tsx
│   │   ├── PhraseCard.tsx
│   │   ├── PatternCard.tsx
│   │   ├── Dialogue.tsx
│   │   ├── DialogueLine.tsx
│   │   ├── StoryViewer.tsx
│   │   ├── StorySentence.tsx
│   │   ├── ListeningQuestion.tsx
│   │   ├── ProgressBar.tsx
│   │   └── Toggle.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── LearnPage.tsx
│   │   ├── LessonPage.tsx
│   │   ├── StoriesPage.tsx
│   │   ├── StoryPage.tsx
│   │   ├── PracticePage.tsx
│   │   ├── ProgressPage.tsx
│   │   └── SettingsPage.tsx
│   ├── audio/
│   │   └── speech.ts
│   ├── data/
│   │   ├── lessons/
│   │   ├── stories/
│   │   └── curriculum.ts
│   ├── hooks/
│   │   ├── useSpeech.ts
│   │   ├── useProgress.ts
│   │   └── usePreferences.ts
│   ├── storage/
│   │   └── localStorage.ts
│   ├── types/
│   │   ├── lesson.ts
│   │   ├── story.ts
│   │   └── settings.ts
│   └── styles/
│       ├── global.css
│       └── variables.css
└── tests/
```

Codex may simplify this when justified.

------------------------------------------------------------------------

# 15. Content Data Models

Content must remain separate from presentation.

``` typescript
interface Phrase {
  id: string;
  kannada: string;
  romanized: string;
  english: string;
  hindiHint?: string;
  usageNote?: string;
}

interface PatternExample {
  kannada: string;
  romanized: string;
  english: string;
}

interface Pattern {
  id: string;
  keywordKannada: string;
  keywordRomanized: string;
  meaning: string;
  explanation: string;
  examples: PatternExample[];
}

interface DialogueLine {
  id: string;
  speaker: string;
  kannada: string;
  romanized: string;
  english: string;
}

interface Dialogue {
  id: string;
  title: string;
  lines: DialogueLine[];
}

interface StorySentence {
  id: string;
  english: string;
  kannada: string;
  romanized: string;
}

interface VocabularyItem {
  kannada: string;
  romanized: string;
  english: string;
}

interface Story {
  id: string;
  title: string;
  topic: string;
  difficulty: 1 | 2 | 3;
  sentences: StorySentence[];
  vocabulary?: VocabularyItem[];
  questions?: ListeningQuestion[];
}

interface Lesson {
  day: number;
  id: string;
  title: string;
  scenario: string;
  objective: string;
  phrases: Phrase[];
  pattern?: Pattern;
  dialogue?: Dialogue;
  storyId?: string;
  listeningQuestions: ListeningQuestion[];
  realWorldMission?: string;
}
```

Quiz:

``` typescript
interface ListeningQuestion {
  id: string;
  audioKannada: string;
  romanized?: string;
  prompt: string;
  choices: string[];
  correctIndex: number;
  explanation?: string;
}
```

Quiz flow: Play audio → choose → feedback → reveal Kannada → reveal
romanization → reveal English → replay.

------------------------------------------------------------------------

# 16. Progress Tracking

No account. Use localStorage.

Example:

``` json
{
  "completedLessons": [1, 2, 3],
  "currentDay": 4,
  "completedStories": ["sky-01", "tree-01"],
  "listeningCorrect": 18,
  "listeningAttempted": 25,
  "preferences": {
    "showRomanization": true,
    "showEnglish": true,
    "showHindiHints": false,
    "speechRate": 0.8
  }
}
```

Track lessons/stories completed, listening attempted/correct, current
day, and preferences. Avoid points, streak servers, badges, or
leaderboards in V1.

------------------------------------------------------------------------

# 17. Listening Difficulty Ladder

1.  Audio + Kannada + romanization + English.
2.  Audio + Kannada + romanization.
3.  Audio + Kannada.
4.  Audio only + comprehension question.
5.  Short multi-line dialogue audio + context/meaning question.

Gradually move toward Levels 4--5.

------------------------------------------------------------------------

# 18. Role-Play

V1 needs no AI or speech recognition. Use deterministic branching.

Example:

``` text
Shopkeeper: Enu beku sir? [audio]

A. Tomato ondu kilo kodi.
B. Nanage gottilla.
C. Illi nillisi.
```

Correct answer advances the conversation.

------------------------------------------------------------------------

# 19. V1 Scope

Do not fully author all 30 days before validating the product.

Initial usable V1: - complete shell; -
Home/Learn/Stories/Practice/Progress/Settings; - speech engine; -
localStorage; - first **5 polished lessons**; - first **5 stories**; -
15+ listening questions; - one role-play.

First lessons: 1. Greetings + survival 2. Want / Don't Want 3. How
Much? + Numbers 4. Here / There / Where 5. Review + Mini Conversation

First stories: 1. The Sky 2. A Tree 3. Rain 4. Cricket 5. Bengaluru

------------------------------------------------------------------------

# 20. First Five Lesson Intent

## Day 1 --- Survival Kannada

Teach greetings, yes/no, "a little Kannada", don't know, speak slowly,
say again. Pattern: `gottu/gottilla`. Mission: use Namaskara.

## Day 2 --- Want / Don't Want

Teach `beku/beda`, water, coffee, cover, bill. Mission: use `beda`
naturally.

## Day 3 --- Price and Quantity

Teach `eshtu`, `idu eshtu`, one/two, kilo, `kodi`. Pattern: number +
item + `kodi`. Mission: ask price.

## Day 4 --- Location

Teach `elli`, `illi`, `alli`, `munde`, left, right, `illi nillisi`.
Mission: recognize/use a direction word.

## Day 5 --- Review

No major new vocabulary. Mixed listening, shop role-play, directions
role-play, short story, pattern review.

------------------------------------------------------------------------

# 21. Story Difficulty

Difficulty 1: \~5 short, repetitive sentences and common nouns.

Difficulty 2: 6--8 sentences, simple connectors, slightly longer factual
content.

Difficulty 3: 8--10 sentences, more natural Kannada and broader
vocabulary while still context-friendly.

English and Kannada should convey the same idea naturally; avoid
unnatural literal translation.

------------------------------------------------------------------------

# 22. Vocabulary Reuse

Deliberately recycle known vocabulary in later lessons and stories.
Consider a future `vocabulary.ts` registry:

``` typescript
{
  id: "water",
  kannada: "ನೀರು",
  romanized: "Neeru",
  english: "water",
  introducedDay: 2
}
```

This becomes desirable before scaling to all 30 days.

------------------------------------------------------------------------

# 23. Content Quality Rules

For every Kannada item: 1. meaning matches English; 2. natural for
Bengaluru; 3. transliteration matches Kannada; 4. TTS is manually
checked; 5. avoid unnecessary formality; 6. use polite/simple phrasing;
7. do not show many alternatives on beginner cards; 8. uncertain content
must be flagged for review rather than treated as authoritative.

------------------------------------------------------------------------

# 24. Accessibility

Use semantic controls, keyboard access, visible focus, adequate
contrast, ARIA labels, scalable Unicode Kannada text, and never
communicate meaning only through color.

------------------------------------------------------------------------

# 25. Offline / PWA Direction

Not required initially, but keep the architecture PWA-friendly. Future
versions may cache static lessons and optionally pre-generated audio.
Browser TTS avoids bundling hundreds of audio files in V1.

------------------------------------------------------------------------

# 26. TTS Compatibility Risks

Web Speech API differs across Chrome, Edge, Safari, Windows, macOS,
Android, and iOS.

Therefore: - dynamically detect voices; - never assume `kn-IN`; - expose
voice selection; - test desktop Chrome/Edge first; - later test Android
Chrome; - handle `voiceschanged`; - cancel current speech before new
playback; - prevent overlapping utterances.

------------------------------------------------------------------------

# 27. Error Handling

No Kannada voice: show a non-blocking warning and retain
text/transliteration.

Speech failure: do not crash the lesson.

localStorage failure: continue without persistent progress.

Missing lesson/story: show a friendly fallback with navigation.

------------------------------------------------------------------------

# 28. Performance

Keep the app fast and static. Avoid unnecessary network requests and
heavy dependencies. Browser TTS means no initial audio downloads.

------------------------------------------------------------------------

# 29. Testing

Unit-test storage helpers, progress calculation, voice selection, data
validation, and quiz scoring.

Component-test phrase cards, story sentences, listening questions,
toggles, and speed controls.

Manual checks: - Kannada voice detection; - playback; - speed; -
overlapping speech prevention; - Play All sequencing; - preferences
persistence; - lesson completion persistence; - 360/430px
responsiveness; - desktop layout.

------------------------------------------------------------------------

# 30. V1 Acceptance Criteria

V1 succeeds when: - app runs locally; - current lesson is obvious; -
lessons/stories are navigable; - phone-sized UI works; - Kannada voice
is selected when available; - phrases and individual story sentences
play; - speed can change; - speech does not overlap; - lesson supports
objective, phrases, pattern, dialogue, story, quiz, mission; - story
supports English/Kannada/romanization, sentence audio, Play All, speed,
hide/reveal, listening mode; - progress/preferences persist; - at least
5 lessons, 5 stories, 15 listening questions, and 1 role-play are
polished.

------------------------------------------------------------------------

# 31. Explicit Non-Goals

Do not build in V1: - authentication; - backend/cloud DB; -
social/leaderboards; - AI chatbot; - LLM backend; - speech-to-text
grading; - pronunciation scoring; - subscriptions; - push
notifications; - complex gamification; - teacher dashboard; - full
writing course; - complete grammar reference; - native mobile apps.

------------------------------------------------------------------------

# 32. Future V2

Possible additions: speech recognition, pronunciation feedback, AI
role-play, spaced repetition, vocabulary mastery tracking,
higher-quality generated audio, PWA/offline, dynamic stories constrained
to known vocabulary, and current-interest stories about
cricket/EPL/ISRO/Bengaluru.

Dynamic/current stories should remain separate from the stable
curriculum.

------------------------------------------------------------------------

# 33. Development Milestones

## M0 --- Bootstrap

Vite React TS, routing, CSS, navigation, README. Success: `npm run dev`.

## M1 --- Speech Prototype

Before full UI, create a TTS test page: Kannada text, detected voices,
selected Kannada voice, Play, 0.6/0.8/1.0 speeds. Test several
representative phrases. This de-risks the critical dependency.

## M2 --- Lesson Engine

Models + PhraseCard + PatternCard + Dialogue + LessonPage. Populate Day
1.

## M3 --- Story Engine

StoryViewer, sentence audio, Play All, active highlighting,
translation/romanization toggles, speed. Populate "The Sky".

## M4 --- Listening Quiz

Audio-first question, choices, feedback, reveal, replay, local score.

## M5 --- Progress + Preferences

localStorage for completion and settings.

## M6 --- Content Expansion

Days 1--5, five stories, quizzes, one role-play.

## M7 --- Mobile Polish

360--430px testing, typography, touch targets, navigation, long Kannada
lines.

## M8 --- Deploy

Static hosting such as GitHub Pages, Vercel, or Netlify.

------------------------------------------------------------------------

# 34. Recommended Codex Workflow

Do **not** ask Codex to implement everything in one prompt.

### Prompt 1

> Read `planning.md`. Bootstrap the React + Vite + TypeScript project
> described there. Implement only Milestone 0. Keep dependencies
> minimal. Run relevant checks and summarize what was created.

### Prompt 2

> Read `planning.md`. Implement Milestone 1: Kannada Web Speech API
> prototype. Focus on reliable voice detection, `kn-IN` preference,
> speed control, stopping overlapping utterances, and graceful fallback.
> Do not implement lessons yet.

### Prompt 3

> Read `planning.md`. Implement Milestone 2. Create the reusable lesson
> data model/components and build Day 1 end-to-end. Keep course content
> separate from UI components.

### Prompt 4

> Read `planning.md`. Implement Milestone 3: the bilingual Story engine.
> Build "The Sky" with sentence-level Kannada audio,
> English/Kannada/romanization, hide/reveal controls, speed, Play All,
> and active sentence highlighting.

Continue milestone-by-milestone.

------------------------------------------------------------------------

# 35. Codex Engineering Rules

1.  Read `planning.md` before major architecture changes.
2.  Prefer simple solutions.
3.  Add dependencies only with clear justification.
4.  Keep content separate from components.
5.  Centralize Kannada speech logic.
6.  Build reusable components.
7.  Preserve mobile-first behavior.
8.  No backend/auth in V1.
9.  Persist only learning state/preferences locally.
10. Run TypeScript/build/tests after meaningful changes.
11. Do not rewrite unrelated working code.
12. Document browser limitations instead of faking support.
13. Treat Kannada correctness as content/data quality.
14. Avoid premature V2 features.
15. Keep the app usable even if TTS is unavailable.

------------------------------------------------------------------------

# 36. First Development Session

1.  Bootstrap React/Vite/TS.
2.  Create one prototype page.
3.  Display five Kannada phrases.
4.  Detect `kn-IN` voices.
5.  Add Play.
6.  Add 0.6/0.8/1.0 speed.
7.  Manually evaluate pronunciation.
8.  Only then build reusable lesson components.

This validates the riskiest technical assumption first.

------------------------------------------------------------------------

# 37. Product Success Test

After the first five days, test whether the learner can hear common
Kannada phrases and recognize their intent, and independently express
concepts such as want, don't want, how much, where, here, there, give
one, stop here, little Kannada, don't know Kannada, say again, and speak
slowly.

Also test whether the learner can listen to a five-sentence Kannada
story on a familiar subject and identify some words plus the overall
topic.

If yes, the learning design is working.

------------------------------------------------------------------------

# 38. Guiding Principle

When choosing between adding more content and making existing content
easier to **hear, understand, repeat, recognize, and use**, prioritize
the latter.

The core loop is:

**Hear → Understand → Repeat → Recognize → Use**

The learner is not preparing for a Kannada examination.

The learner is preparing for the next real conversation in Bengaluru.

## UI preference update (2026-09-27)
- [x] Compact the prototype: smaller headings, tighter cards and spacing; preserve readable Kannada and touch controls. Apply this compact style to future lessons. Commit f7738de.

## Standalone migration completed (2026-10-11)
- [x] Copy and verify app/audio, generator, tests and plans into the new folder.
- [x] Remove old site navigation and app files; commit and deploy removal (7972ea5).
- [x] Verify standalone tests and saved-audio playback.
- [ ] Configure new GitHub repository and hosting after user supplies details.
