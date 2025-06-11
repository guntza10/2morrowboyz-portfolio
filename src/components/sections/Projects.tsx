import { useMemo, useRef, useState } from "react";

import { personalProjects } from "../../utils/constant";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../components/ui/pagination";

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  // ref
  const projectRef = useRef<HTMLDivElement>(null);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(personalProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = useMemo(
    () =>
      personalProjects.slice(
        (currentPage - 1) * PROJECTS_PER_PAGE,
        currentPage * PROJECTS_PER_PAGE,
      ),
    [currentPage],
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={projectRef} id="projects" className="section-container">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-gradient section-title">Personal Projects</h2>

        <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {paginatedProjects.map(
            ({
              id,
              name,
              description,
              techStacks,
              image,
              github_url,
              live_demo_url,
            }) => (
              <article key={id} className="card">
                <h4 className="title">{name}</h4>
                <p className="mb-4 text-gray-400">{description}</p>
                <a
                  href={live_demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="project-image mb-6" src={image} />
                </a>

                <div className="mb-6 flex flex-wrap gap-2">
                  {techStacks.map((tech, index) => (
                    <span key={index} className="badge-skill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-4">
                  <a
                    className="btn-third"
                    href={live_demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    className="btn-third"
                    href={github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </article>
            ),
          )}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                size="default"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                aria-disabled={currentPage === 1}
                className="pagination-link"
              />
            </PaginationItem>
            {[...Array(totalPages)].map((_, idx) => (
              <PaginationItem key={idx}>
                <PaginationLink
                  size="default"
                  isActive={currentPage === idx + 1}
                  onClick={() => handlePageChange(idx + 1)}
                  className={`pagination-link ${
                    currentPage === idx + 1
                      ? "bg-primary border-blue-500 text-blue-500"
                      : ""
                  }`}
                >
                  {idx + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext
                size="default"
                onClick={() =>
                  handlePageChange(Math.min(totalPages, currentPage + 1))
                }
                aria-disabled={currentPage === totalPages}
                className="pagination-link"
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Projects;
