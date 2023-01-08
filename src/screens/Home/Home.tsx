import React, { useEffect, useState } from "react";
import { Image, View, Text, FlatList, Alert, TextInput, TouchableOpacity } from "react-native";
import { NamedCounter } from "../../components/NamedCounter/NamedCounter";
import { Task } from "../../components/Task/Task";
import { styles } from "./styles";
import IconAD from "react-native-vector-icons/AntDesign"

type Task = {
  text: string;
  isDone: boolean;
  key: string;
}

export function Home() {
  const [value, setValue] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [finishedTasks, setFinishedTasks] = useState(0);

  useEffect(() => {
    setFinishedTasks((tasks.filter(task => task.isDone === true)).length);
  }, [tasks]);

  function handleTaskAdd() {
    setTasks([...tasks, { text: value, isDone: false, key: Date.now().toString() }]);
  }

  function handleTaskIsDone(taskKey: string) {
    setTasks(
      tasks.map((task) => {
        if (task.key === taskKey) task.isDone = !task.isDone;
        return task;
      })
    )
  }

  function handleTaskRemove(taskKey: string) {
    Alert.alert("Remover", `Remover a tarefa?`, [
      {
        text: 'Sim',
        onPress: () => {
          setTasks(prevState => prevState.filter(item => item.key !== taskKey));
        }
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])

  }
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={require('../../../assets/Logo.png')} />
        </View>
        <View style={styles.tasksContainer}>

          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder="Nova tarefa"
              placeholderTextColor="#6B6B6B"
              onChangeText={setValue}
              value={value}
            />
            <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
              <IconAD name="pluscircleo" color="#FFF" size={15} />
            </TouchableOpacity>
          </View>

          <View style={styles.counterContainer}>
            <NamedCounter name='Criadas' nameColor='#4EA8DE' counter={tasks.length} />
            <NamedCounter name='Concluídas' nameColor='#8284FA' counter={finishedTasks} />
          </View>

          <FlatList
            data={tasks}
            keyExtractor={item => item.key}
            renderItem={({ item }) => (
              <Task isDone={item.isDone} onPressDone={() => handleTaskIsDone(item.key)} text={item.text} onRemove={() => handleTaskRemove(item.key)} />
            )}
            ListEmptyComponent={() => (
              <View style={styles.emptyListContainer}>
                <View style={styles.separator} />
                <Image source={require('../../../assets/Clipboard.png')} style={{ marginBottom: 20 }} />
                <Text style={{ color: "#808080", fontWeight: 'bold' }}>Você ainda não tem tarefas cadastradas</Text>
                <Text style={{ color: "#808080" }}>Crie tarefas e organize seus itens a fazer</Text>
              </View>
            )}
          />
        </View>

      </View>
    </>

  )
}