
const initialState = {
	tasks: [{
		name: "comprar pão",
		id: 1,
		complete: false,
	},
	{
		name: "comprar bolacha",
		id: 2,
		complete: false,
	}]
}

function tasks(state=initialState, action) {
	return state
}

export default tasks;
