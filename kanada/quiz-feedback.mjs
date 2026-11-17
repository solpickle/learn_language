export function createTimedAnswerHighlights(count, {duration = 1800, onExpire = () => {}} = {}) {
  const choices = Array(count).fill(null);
  const timers = Array(count).fill(null);

  return {
    classFor(index, choice, correctChoice) {
      if (choices[index] !== choice) return "";
      return choice === correctChoice ? "correct" : "incorrect";
    },
    flash(index, choice) {
      clearTimeout(timers[index]);
      choices[index] = choice;
      timers[index] = setTimeout(() => {
        choices[index] = null;
        timers[index] = null;
        onExpire(index);
      }, duration);
    },
    reset() {
      timers.forEach(timer => clearTimeout(timer));
      timers.fill(null);
      choices.fill(null);
    }
  };
}
