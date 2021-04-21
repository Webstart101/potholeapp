import React, { useEffect, useState } from "react";
import { firestore } from "../auth/Firebase";

const Sidebar = (props) => {
  var ref = firestore.collection("issues");
  const [issue, setIssue] = useState([]);

  function getIssue() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setIssue(items);
    });
  }

  useEffect(() => {
    getIssue();
    // eslint-disable-next-line
  }, []);

  return (

    <div className="border border-solid border-grey-300 p-2 rounded-l-lg">
    <div >
      {issue.map((issue) => (
        <figure
          key={issue.id}
          className="md:flex mr-2 mb-2 bg-white rounded-3xl p-6 md:p-2 shadow-xl"
          onClick={() => props.position(issue.Latitude, issue.Longitude)}
          >  
          <img
            src={issue.ImageFile}
            alt=""
            className="w-18 h-18 md:w-24 md:h-auto md:rounded-xl rounded-none mx-2 my-2"
          />
          <div className="pt-6 md:p-8 text-center md:text-left space-y-2">
            <figcaption className="font-medium">
              <div className="text-blue-600 text-lg">{issue.Location}</div>
              <div className="text-gray-500 text-sm">{issue.IssueDesc}</div>
            </figcaption>
          </div>
        </figure>
      ))}
    </div>
    </div>
  );
};

export default Sidebar;
