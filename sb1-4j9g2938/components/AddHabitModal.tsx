import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { X } from 'lucide-react-native';
import { useState } from 'react';

interface AddHabitModalProps {
  visible: boolean;
  onClose: () => void;
  onAdd: (habitName: string) => void;
}

export default function AddHabitModal({ visible, onClose, onAdd }: AddHabitModalProps) {
  const [habitName, setHabitName] = useState('');

  const handleAdd = () => {
    if (habitName.trim()) {
      onAdd(habitName.trim());
      setHabitName('');
      onClose();
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Add New Habit</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <X size={24} color="#6b7280" />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            placeholder="Enter habit name"
            value={habitName}
            onChangeText={setHabitName}
            autoFocus
            placeholderTextColor="#9ca3af"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.addButton]}
              onPress={handleAdd}
            >
              <Text style={styles.addButtonText}>Add Habit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: '#111827',
  },
  closeButton: {
    padding: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#1f2937',
    backgroundColor: '#f9fafb',
    marginBottom: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f3f4f6',
  },
  cancelButtonText: {
    color: '#4b5563',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
  addButton: {
    backgroundColor: '#6366f1',
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
  },
});