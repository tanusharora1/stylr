import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useCart } from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default function CartScreen() {
  const { items, removeFromCart, updateQuantity, totalAmount } = useCart();

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="cart-outline" size={64} color="#E5F4FF40" />
        <Text style={styles.emptyText}>Your cart is empty</Text>
        <TouchableOpacity style={styles.shopButton}>
          <Text style={styles.shopButtonText}>Start Shopping</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.itemList}>
        {items.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.brandName}>{item.brand}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
              
              <View style={styles.quantityControls}>
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                
                <Text style={styles.quantity}>{item.quantity}</Text>
                
                <TouchableOpacity
                  onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.quantityButton}
                >
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                  style={styles.removeButton}
                >
                  <Ionicons name="trash-outline" size={20} color="#E5F4FF80" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.summary}>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Subtotal</Text>
          <Text style={styles.summaryAmount}>${totalAmount.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>Shipping</Text>
          <Text style={styles.summaryAmount}>Free</Text>
        </View>
        <View style={[styles.summaryRow, styles.totalRow]}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1D1F',
  },
  emptyContainer: {
    flex: 1,
    backgroundColor: '#1A1D1F',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#E5F4FF80',
    fontSize: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  shopButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: '#E5F4FF20',
    borderRadius: 24,
  },
  shopButtonText: {
    color: '#E5F4FF',
    fontSize: 16,
    fontWeight: '500',
  },
  itemList: {
    flex: 1,
  },
  cartItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5F4FF10',
  },
  itemImage: {
    width: 100,
    height: 120,
    borderRadius: 8,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemName: {
    color: '#E5F4FF',
    fontSize: 16,
    fontWeight: '300',
    marginBottom: 4,
  },
  brandName: {
    color: '#E5F4FF80',
    fontSize: 14,
    marginBottom: 8,
  },
  price: {
    color: '#E5F4FF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#E5F4FF20',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonText: {
    color: '#E5F4FF',
    fontSize: 16,
    fontWeight: '500',
  },
  quantity: {
    color: '#E5F4FF',
    fontSize: 16,
    marginHorizontal: 16,
  },
  removeButton: {
    marginLeft: 'auto',
    padding: 8,
  },
  summary: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5F4FF10',
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryText: {
    color: '#E5F4FF80',
    fontSize: 14,
  },
  summaryAmount: {
    color: '#E5F4FF',
    fontSize: 14,
  },
  totalRow: {
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E5F4FF10',
  },
  totalText: {
    color: '#E5F4FF',
    fontSize: 16,
    fontWeight: '500',
  },
  totalAmount: {
    color: '#E5F4FF',
    fontSize: 16,
    fontWeight: '500',
  },
  checkoutButton: {
    backgroundColor: '#E5F4FF',
    paddingVertical: 16,
    borderRadius: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: '#1A1D1F',
    fontSize: 16,
    fontWeight: '500',
  },
});