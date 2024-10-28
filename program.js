let taskList = [];

function addTask(taskName, taskDue) {
	let task = {
		name: taskName,
		due: taskDue,
		condition: false,
	};

	taskList.push(task);
}

function removeTask(taskName) {
	taskList = taskList.filter((task) => task.name !== taskName);
}

function printTasks() {
	console.log("All Tasks:");
	taskList.forEach((task) => {
		console.log(`Task: ${task.name}, Due: ${task.due}, Completed: ${task.condition}`);
	});
}

function completedTask(taskName) {
	let taskIndex = taskList.findIndex((task) => task.name === taskName);
	if (taskIndex !== -1) {
		taskList[taskIndex].condition = true;
	} else {
		console.log("Task not found.");
	}
}

addTask("Fix bug in code", "2024-02-21");
addTask("Update documentation", "2024-02-22");
printTasks();
console.log("");
completedTask("Fix bug in code");
removeTask("Update documentation");
printTasks();
