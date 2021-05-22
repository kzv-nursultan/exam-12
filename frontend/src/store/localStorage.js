export const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('exam-12', serializedState);
  } catch (e) {
    console.log('Could not save state');
  }
};

export const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('exam-12');
    if (serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}