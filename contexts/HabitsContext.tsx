import { createContext, useContext, useState, ReactNode } from 'react';

export type Habit = {
  id: string;
  name: string;
  completed: boolean;
};

type HabitsContextType = {
  habits: Habit[];
  addHabit: (name: string) => void;
  toggleHabit: (id: string) => void;
  deleteHabit: (id: string) => void;
  completionRate: number;
};

const HabitsContext = createContext<HabitsContextType | undefined>(undefined);

const initialHabits: Habit[] = [
  { id: '1', name: 'Morning Meditation', completed: false },
  { id: '2', name: 'Read 30 minutes', completed: false },
  { id: '3', name: 'Exercise', completed: false },
  { id: '4', name: 'Drink 8 glasses of water', completed: false },
];

export function HabitsProvider({ children }: { children: ReactNode }) {
  const [habits, setHabits] = useState<Habit[]>(initialHabits);

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      name,
      completed: false,
    };
    setHabits([...habits, newHabit]);
  };

  const toggleHabit = (id: string) => {
    const updatedHabits = habits.map(habit =>
      habit.id === id ? { ...habit, completed: !habit.completed } : habit
    );
    
    // Sort habits: uncompleted first, then completed
    const sortedHabits = [
      ...updatedHabits.filter(h => !h.completed),
      ...updatedHabits.filter(h => h.completed)
    ];
    
    setHabits(sortedHabits);
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter(habit => habit.id !== id));
  };

  const completionRate = habits.length > 0
    ? Math.round((habits.filter(h => h.completed).length / habits.length) * 100)
    : 0;

  return (
    <HabitsContext.Provider value={{
      habits,
      addHabit,
      toggleHabit,
      deleteHabit,
      completionRate,
    }}>
      {children}
    </HabitsContext.Provider>
  );
}

export function useHabits() {
  const context = useContext(HabitsContext);
  if (context === undefined) {
    throw new Error('useHabits must be used within a HabitsProvider');
  }
  return context;
}