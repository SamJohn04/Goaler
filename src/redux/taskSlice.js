import { createSlice } from "@reduxjs/toolkit";

/*class Task {
    constructor (title, description, toRepeat, repeatTime, deadLine, steps, starred, tags) {
        this.title = title
        this.description = description
        this.toRepeat = toRepeat
        this.repeatTime = repeatTime
        this.deadLine = deadLine
        this.steps = steps
        this.starred = starred
        this.stepsDone = 0
        this.completeCounter = 0
        this.tags = tags
    }
    addStep() {
        console.log(this.stepsDone)
        this.stepsDone++
        if(this.steps === this.stepsDone) {
            ++this.completeCounter
            if(this.toRepeat) {
                this.stepsDone = 0
            }
        }
    }
    reduceStep() {
        if(this.stepsDone === this.steps) {
            --this.completeCounter
        }
        --this.stepsDone
    }

    setComplete() {
        ++this.completeCounter
        return this
    }
    
    procrastinate() {
    }

    addAttach() {
        //add attachments
    }

    share() {
       //send tasks > accept then rm from user's list? Give q for that. 
    }
    addTag() {
    }
}

const task = new Task("Testingg..", `Hello testing\nhow are youu?\nI'm good what about u?`, false, 0, '1730200223', 10, false, [])
*/

const task = {
    title: "Testingg..",
    description: `Hello testing\nhow are youu?\nI'm good what about u?`,
    toRepeat: false,
    repeatTime: 0,
    deadLine: '1730200223',
    steps: 10,
    starred: false,
    stepsDone: 0,
    completeCounter: 0,
    tags: [],
    timeStamp: new Date()
}

const task1 = {
    title: "Hello there",
    description: `General Kenobii`,
    toRepeat: true,
    repeatTime: 100,
    deadLine: '1730200223',
    steps: 10,
    starred: true,
    stepsDone: 0,
    completeCounter: 0,
    tags: [],
    timeStamp: new Date()
}

const task2 = {
    title: "Wel well welll..",
    description: `That's a lot of wells :D`,
    toRepeat: false,
    repeatTime: 0,
    deadLine: '1730200223',
    steps: 10,
    starred: false,
    stepsDone: 0,
    completeCounter: 0,
    tags: [],
    timeStamp: new Date()
}

const initialState = {
    user: 'CodingSam',
    tasks: [task, task1, task2],
    currentTaskIndex: 0,
    taskCount: 3,
}

export const taskSlice = createSlice ({
    name: 'taskList',
    initialState,
    /*reducers: {

        setTaskIndex: (state, action) => {
            state.currentTaskIndex = action.payload;
        },
        addStepFromList: (state, action) => {
            state.tasks[action.payload].addStep();
        },
        addStepFromPage: (state) => {
            state.tasks[state.currentTaskIndex].addStep();
        },
        reduceStepFromList: (state, action) => {
            state.tasks[action.payload].reduceStep();
        },
        reduceStepFromPage: (state) => {
            state.tasks[state.currentTaskIndex].reduceStep();
        },
    }*/
    reducers: {
        setTaskIndex: (state, action) => {
            state.currentTaskIndex = action.payload;
        },
        addStepFromList: (state, action) => {
            state.tasks[action.payload].stepsDone++;
            if(state.tasks[action.payload].steps === state.tasks[action.payload].stepsDone) {
                ++state.tasks[action.payload].completeCounter
                if(state.tasks[action.payload].toRepeat) {
                    state.tasks[action.payload].stepsDone = 0
                }
            }
        },
        addStepFromPage: (state) => {
            state.tasks[state.currentTaskIndex].stepsDone++;
            if(state.tasks[state.currentTaskIndex].steps === state.tasks[state.currentTaskIndex].stepsDone) {
                ++state.tasks[state.currentTaskIndex].completeCounter
                if(state.tasks[state.currentTaskIndex].toRepeat) {
                    state.tasks[state.currentTaskIndex].stepsDone = 0
                }
            }
        },
        reduceStepFromList: (state, action) => {
            if(state.tasks[action.payload].stepsDone === 0 || state.tasks[action.payload].stepsDone === state.tasks[action.payload].steps) {
                if (state.tasks[action.payload].completeCounter === 0)
                    return
                --state.tasks[action.payload].completeCounter
                state.tasks[action.payload].stepsDone = state.tasks[action.payload].steps - 1
                return;
            }
            --state.tasks[action.payload].stepsDone
        },
        reduceStepFromPage: (state) => {
            if(state.tasks[state.currentTaskIndex].stepsDone === 0 || state.tasks[state.currentTaskIndex].stepsDone === state.tasks[state.currentTaskIndex].steps) {
                if (state.tasks[state.currentTaskIndex].completeCounter === 0)
                    return
                --state.tasks[state.currentTaskIndex].completeCounter
                state.tasks[state.currentTaskIndex].stepsDone = state.tasks[state.currentTaskIndex].steps - 1
                return;
            }
            --state.tasks[state.currentTaskIndex].stepsDone
        },
        favFromList: (state, action) => {
            state.tasks[action.payload].starred = !state.tasks[action.payload].starred
        },
        favFromPage: (state) => {
            state.tasks[state.currentTaskIndex].starred = !state.tasks[state.currentTaskIndex].starred
        },
    }
})

export const {setTaskIndex, addStepFromList, addStepFromPage, reduceStepFromList, reduceStepFromPage, favFromList, favFromPage} = taskSlice.actions

//export { Task }

export default taskSlice.reducer