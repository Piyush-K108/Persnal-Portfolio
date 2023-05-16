import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
      <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - Present"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
          Chameli Devi Group of Institutions 
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Indore, India
          </h4>
          <p> Computer Science And Engineering</p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Feb 2022 - May 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            TechFloric, Indore, India
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Python Traning
          </h4>

          <p> Training in Python at TechFloric was awesome and that was my
              first composer to how the Software Industry works and what the
              chain of command looks like with the great environment
              </p>
        </VerticalTimelineElement>


        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017-2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
      <h3 className="vertical-timeline-element-title">
          Shri Agrasen Vidyalaya
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
          High School
          </h4>
     
          <p>
          My school life was surely a learning experience. The confidence and motivation it gave me, I couldn't get anywhere else. Most importantly, it is the place where I recognized my uniqueness and individuality.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
