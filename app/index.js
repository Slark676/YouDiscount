import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../components/Style";

export default function DiscountCalculator() {
  const [amount, setAmount] = useState("");
  const [discount, setDiscount] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [amount, discount]);

  const calculateTotal = () => {
    const numericAmount = parseFloat(amount) || 0;
    const numericDiscount = parseFloat(discount) || 0;

    const discountAmount = numericAmount * (numericDiscount / 100);
    const finalTotal = numericAmount - discountAmount;

    setTotal(finalTotal);
  };

  const resetValues = () => {
    setAmount("");
    setDiscount("");
    setTotal(0);
  };

  const handleAmountChange = (value) => {
    const numericValue = value.replace(/[^0-9.]/g, "");
    setAmount(numericValue);
  };

  const handleDiscountChange = (value) => {
    const numericValue = value.replace(/[^0-9.]/g, "");
    setDiscount(numericValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Discount Calculator</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="$0.00"
          placeholderTextColor="#60758a"
          value={amount}
          onChangeText={handleAmountChange}
          keyboardType="numeric"
        />
        <View style={styles.icon}>
          <Text>💵</Text>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="0%"
          placeholderTextColor="#60758a"
          value={discount}
          onChangeText={handleDiscountChange}
          keyboardType="numeric"
        />
        <View style={styles.icon}>
          <Text>🏷️</Text>
        </View>
      </View>

      <Text style={styles.total}>${total.toFixed(2)}</Text>
      <Text style={styles.totalText}>Total after discount</Text>

      <TouchableOpacity style={styles.button} onPress={resetValues}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}
