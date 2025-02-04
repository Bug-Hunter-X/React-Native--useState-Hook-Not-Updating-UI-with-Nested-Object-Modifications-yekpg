import React, { useState } from 'react';

const MyComponent = () => {
  const [myState, setMyState] = useState({
    nestedObject: { name: 'Initial', value: 0 }
  });

  const updateName = () => {
    // Incorrect: Directly modifying the nested object
    // myState.nestedObject.name = 'Updated';
    // setMyState(myState); // This won't work

    // Correct: Creating a new object
    setMyState({
      ...myState,
      nestedObject: { ...myState.nestedObject, name: 'Updated' }
    });
  };

  const updateValue = () => {
    setMyState({
        ...myState,
        nestedObject: {...myState.nestedObject, value: myState.nestedObject.value + 1}
    })
  };

  return (
    <View>
      <Text>Name: {myState.nestedObject.name}</Text>
      <Text>Value: {myState.nestedObject.value}</Text>
      <Button title="Update Name" onPress={updateName} />
      <Button title="Update Value" onPress={updateValue} />
    </View>
  );
};

export default MyComponent; 