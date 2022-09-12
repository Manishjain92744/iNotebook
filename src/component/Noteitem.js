import React from "react";

const Noteitem = (props) => {
  const { note } = props;
  return (
    <div className="col-md-3 ">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">
            {note.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quo consequuntur laudantium ducimus vel magnam
            quisquam, inventore ullam placeat amet. Aliquid, quasi eveniet
            voluptate perferendis eum amet laborum expedita? Quis, consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
