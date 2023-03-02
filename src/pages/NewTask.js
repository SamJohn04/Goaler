import { TextField, IconButton, Checkbox, ButtonGroup, Button, Grid } from "@mui/material";
import React from "react";
import { Star, StarBorder } from "@mui/icons-material";
// const task = {
//     title: "Testingg..",
//     description: `Hello testing\nhow are youu?\nI'm good what about u?`,
//     toRepeat: false,
//     repeatTime: 0,
//     deadLine: '1730200223',
//     steps: 10,
//     starred: false,
//     stepsDone: 0,
//     completeCounter: 0,
//     tags: [],
//     timeStamp: new Date()
// }

const NewTask = () => {
    let [star, setStar] = React.useState(false);
    let [repeat, setRepeat] = React.useState(false);
    let [choice, setChoice] = React.useState(false);
    //let choice = Array(7).fill(false);
    return (
        <div>
            <h1 style= {{fontSize: "4rem"}}>{"Enter Deets"}</h1>
            <div style={{textAlign: "left", padding: "5rem"}}>
                <div style={{display: "flex", alignContent: "space-evenly"}}>
                    <IconButton onClick= {()=>setStar(!star)} style={{}}>{star ? <Star style={{color: "gold",}}/> : <StarBorder style= {{color: "black"}}/>}</IconButton>
                    <TextField label={"Title"} variant= {"standard"} margin = {"none"} fullWidth required style={{margin: "1rem"}}/>
                </div>
                <TextField label={"Description"} variant = {"outlined"} margin = {"normal"} fullWidth multiline />
                <Checkbox label= {"Should the task repeat?"} onChange= {(event) => {setRepeat(event.target.checked)}}/> {"Should the task repeat?"}
                <div id= {"repeatOrNot"}>
                    {
                       repeat?
                            // <Grid container spacing={2} margin={"1rem"}>
                            //     <Grid item xs={3}>
                            //         <ButtonGroup variant={"contained"} orientation={"vertical"} >
                            //             <Button onClick={() => setChoice("day")} color={choice==="day"?"secondary":"primary"}>Day</Button>
                            //             <Button onClick={() => setChoice("week")} color={choice==="week"?"secondary":"primary"}>Week</Button>
                            //             <Button onClick={() => setChoice("month")} color={choice==="month"?"secondary":"primary"}>Month</Button>
                            //             <Button onClick={() => setChoice("year")} color={choice==="year"?"secondary":"primary"}>Year</Button>
                            //             <Button onClick={() => setChoice("custom")} color={choice==="custom"?"secondary":"primary"}>Custom</Button>
                            //         </ButtonGroup>
                            //     </Grid>
                            //     <Grid item xs={9}>
                            //         {
                            //             choice === "day"?
                            //                 <TextField type={"time"}/>
                            //             :
                            //             choice === "week"?
                            //                 <ButtonGroup variant="outlined" ><IconButton >Sun</IconButton><IconButton >Mon</IconButton><IconButton >Tue</IconButton><IconButton >Wed</IconButton><IconButton >Thu</IconButton><IconButton >Fri</IconButton><IconButton >Sat</IconButton></ButtonGroup>
                            //             :
                            //             choice === "month"
                            //         }
                            //     </Grid>
                            // </Grid>
                            <Grid container>
                                <Grid item xs={12}><div style={{display: "flex", justifyContent: "space-evenly", margin: "auto"}}><IconButton color={choice[0]?"primary":"default"} onClick={() => {}}>S</IconButton><IconButton >M</IconButton><IconButton >T</IconButton><IconButton >W</IconButton><IconButton >T</IconButton><IconButton >F</IconButton><IconButton >S</IconButton><Button > Select All</Button></div></Grid>
                            </Grid>
                       :
                            <div style={{display: "inline"}}>
                                <div style={{display: "flex", alignContent: "center", justifyContent: "flex-start", marginTop: "1rem"}}><div style={{marginTop: "auto", marginBottom: "auto", marginRight: "0.5rem"}}>Enter the deadline:</div> <TextField type= {"datetime-local"} name= {"deadline"}/></div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default NewTask