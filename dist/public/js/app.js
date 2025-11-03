console.log("Welcome to my website!")

async function updateTodo(todoId) {
  const res = await fetch(`http://localhost:3100/todos/update/${todoId}`, {
    method: "PUT"
  })
  const data = await res.json()
  if (data.success) {
    window.location.href = "/todos"
  } else {
    alert("Todo not found!")
  }
}

async function deleteTodo(todoId) {
  const choice = confirm("Are you sure you want to delete this todo?")
  if (choice) {
    const res = await fetch(`http://localhost:3100/todos/delete/${todoId}`, {
      method: "DELETE"
    })
    const data = await res.json()
    if (data.success) {
      window.location.href = "/todos"
    } else {
      alert("Todo not found!")
    }
  }
}