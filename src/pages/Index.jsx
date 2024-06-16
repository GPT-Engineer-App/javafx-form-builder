import React, { useState } from 'react';
import { Container, VStack, HStack, Input, Button, Select, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Text } from "@chakra-ui/react";

const Index = () => {
  const [items, setItems] = useState([{ question: '', answer: '' }]);

  const handleAddItem = () => {
    setItems([...items, { question: '', answer: '' }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <Select placeholder="Select Test">
          <option value="test1">Test 1</option>
          <option value="test2">Test 2</option>
          <option value="test3">Test 3</option>
        </Select>

        <NumberInput>
          <NumberInputField placeholder="Age" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        {items.map((item, index) => (
          <HStack key={index} spacing={4} width="100%">
            <Input
              placeholder="Question"
              value={item.question}
              onChange={(e) => handleItemChange(index, 'question', e.target.value)}
            />
            <Input
              placeholder="Answer"
              value={item.answer}
              onChange={(e) => handleItemChange(index, 'answer', e.target.value)}
            />
          </HStack>
        ))}

        <Button onClick={handleAddItem}>Add Item</Button>

        <NumberInput precision={2} step={0.1}>
          <NumberInputField placeholder="Precision" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>

        <HStack spacing={4}>
          <Button colorScheme="blue">Validate</Button>
          <Button colorScheme="red">Cancel</Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;