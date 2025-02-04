# React Native: useState Hook Not Updating UI with Nested Object Modifications

This repository demonstrates a common issue in React Native where modifications to nested objects within the `useState` hook don't trigger UI updates.  The problem arises because React performs a shallow comparison of objects, meaning it checks if the object reference has changed, not the content of the object.

**Problem:** When you modify a nested object directly, React doesn't recognize the change, leading to a UI that doesn't reflect the latest state.

**Solution:** Create a new object with the updated values, ensuring that React detects the change in reference and triggers a re-render.