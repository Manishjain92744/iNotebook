import React from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useEffect , useState } from "react";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";


const Notes = (props) => {
  const context = useContext(noteContext);
  const { notes, getNotes , editNote} = context;
  let navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token')){
         getNotes();
    }
    else{
      navigate("/login");
    }
  },[]);

const ref = useRef(null);
const refClose = useRef(null)
const [note  ,setNote] = useState({id : "", etitle : "" , edescription :"",etag :""});
 
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id: currentNote._id, etitle : currentNote.title , edescription : currentNote.description , etag : currentNote.tag})
   
  }

  const handleClick = (e) => {
    editNote( note.id , note.etitle , note.edescription , note.etag);
    refClose.current.click();
    props.showAlert("updated successfully " , "success");
   } 

   const onChange =(e)=>{
     setNote({...note,[e.target.name]: e.target.value})
 
   }

  return (
    <>
      <AddNote  showAlert={props.showAlert}/>
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModalCenter"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Edit Note
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    value={note.etitle}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                    minLength={5}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                disabled={note.etitle.length<5 || note.edescription.length <5 || note.etag.length<5 }
              >
                Close
              </button>
              <button onClick={handleClick} type="button" className="btn btn-primary">
                update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container row my-3 ">
        <h1> your notes</h1>
        
        <h4> {notes.length===0 && 'No notes to display'}</h4>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
          );
        })}
        </div>
     
    </>
  );
};

export default Notes;
