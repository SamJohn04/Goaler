import React from "react";
import { ArrowDropUp, ArrowDropDown, Star, StarBorder } from '@mui/icons-material';
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addStepFromPage, favFromPage, reduceStepFromPage, favFromList, addStepFromList, reduceStepFromList } from "../redux/taskSlice";

const TaskCard = ({index}) => {
    const task = useSelector((state) => state.tasks.tasks[index===undefined? state.tasks.currentTaskIndex : index])
    const dispatch = useDispatch()
    const star = task?.starred ? <Star style={{color: "gold",}}/> : <StarBorder style= {{color: "black"}}/>
    return (
        <div style={{textAlign: "left", width: "94dvw", margin: "auto", marginTop: "0.5rem", display: "grid", marginBottom: "1rem", borderRadius: "5%"}}>
            <div style={{height: "6rem", backgroundColor: "beige", display: "grid",gridRow: "1", gridColumn: "1", paddingRight: "1rem", borderRadius: "5%"}}>
                <h3 style={{fontFamily: "SSP", fontSize: "1.5rem", gridColumn: "1", gridRow: "1"}}> <IconButton onClick={() => {if(index === undefined) dispatch(favFromPage()); else dispatch(favFromList(index));}}>{star}</IconButton> {task?.title} : {task?.toRepeat?task?.completeCounter:task?.completeCounter === 0? "":"Complete"}</h3>
                <h3 style={{fontFamily: "SSP", fontSize: "1.5rem", gridColumn: "2", gridRow: "1", textAlign: "right"}}><IconButton onClick={() => {if(index === undefined) dispatch(addStepFromPage()); else dispatch(addStepFromList(index))}} disabled= {task?.stepsDone===task?.steps}><ArrowDropUp/></IconButton> {task?.stepsDone} <IconButton onClick={() => {if(index === undefined) dispatch(reduceStepFromPage()); else dispatch(reduceStepFromList(index))}} disabled = {task?.completeCounter === 0 && task?.stepsDone === 0}><ArrowDropDown/></IconButton> / {task?.steps}</h3>
            </div>
            <div style={{gridRow:"2", gridColumn: "1", backgroundColor: "bisque", maxHeight: "7rem", padding: "1rem", paddingLeft: "2rem", borderRadius: "5%"}}>
                <p style={{fontFamily: "Gloock", whiteSpace: "pre-wrap", fontSize: "1rem"}}>{task?.description}</p>
            </div>
        </div>
    )
}

export default TaskCard