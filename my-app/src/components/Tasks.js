// const tasks=[
//     {
//         id: 1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: 'Doctors1 Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: 'Doctors2 Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: false,
//     }

// ]

import Task from './Task'

const Tasks = ({tasks, onDelete,onToggle}) => {

    

  return (
    <>
        {/* {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))} */}
        {tasks.map((task) => (
        < Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
        ))}
    </>
  )
}

export default Tasks