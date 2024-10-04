import { Project } from "@/state/api";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { name, description, startDate, endDate } = project;
  return (
    <div className="rounded border p-4 shadow">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Start Date: {startDate}</p>
      <p>End Date: {endDate}</p>
    </div>
  );
};

export default ProjectCard;
