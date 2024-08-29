import AddMemberModal from "@/components/team/AddModalMember";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function ProjectTeamView() {

    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!

  return (
    <>
      <h1 className="md:text-5xl text-3xl font-black">Administra Equipo</h1>
      <p className="md:text-2xl text-xl font-light text-gray-500 mt-5">
        Administra equipo de trabajo para este proyecto
      </p>

      <nav className="my-5 fle gap-6 flex justify-between items-center md:flex-row flex-col">
        <button
          className="bg-gray-800 hover:bg-gray-900 py-2 px-6 text-white text-lg font-bold cursor-pointer transition-colors duration-200 rounded-md flex items-center gap-4 justify-center w-full md:w-80 lg:w-auto"
          onClick={() => navigate(location.pathname + "?addMember=true")}
        >
          Agregar colaborador
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-white size-7"
          >
            <path
              fillRule="evenodd"
              d="M6.75 7.5a4.25 4.25 0 1 1 8.5 0a4.25 4.25 0 0 1-8.5 0M11 4.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.25 17A3.75 3.75 0 0 1 7 13.25h.34q.28.001.544.086l.866.283a7.25 7.25 0 0 0 4.5 0l.866-.283c.175-.057.359-.086.543-.086H15A3.75 3.75 0 0 1 18.75 17v1.188c0 .754-.546 1.396-1.29 1.517a40.1 40.1 0 0 1-12.92 0a1.54 1.54 0 0 1-1.29-1.517zM7 14.75A2.25 2.25 0 0 0 4.75 17v1.188c0 .018.013.034.031.037c4.119.672 8.32.672 12.438 0a.04.04 0 0 0 .031-.037V17A2.25 2.25 0 0 0 15 14.75h-.34a.3.3 0 0 0-.079.012l-.865.283a8.75 8.75 0 0 1-5.432 0l-.866-.283a.3.3 0 0 0-.077-.012z"
              clipRule="evenodd"
            ></path>
            <path d="M19.5 6.25a.75.75 0 0 1 .75.75v1.75H22a.75.75 0 0 1 0 1.5h-1.75V12a.75.75 0 0 1-1.5 0v-1.75H17a.75.75 0 0 1 0-1.5h1.75V7a.75.75 0 0 1 .75-.75"></path>
          </svg>
        </button>

        <Link
          to={`/projects/${projectId}`}
          className="bg-gray-800 hover:bg-gray-900 py-2 px-6 text-white text-lg font-bold cursor-pointer transition-colors duration-200 rounded-md flex items-center gap-4 justify-center w-full md:w-60 lg:w-auto"
        >
          Volver a proyecto
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-white size-6"
          >
            <path d="m9 18l-6-6l6-6l1.4 1.4L6.8 11H19V7h2v6H6.8l3.6 3.6z"></path>
          </svg>
        </Link>
      </nav>

      <AddMemberModal />
    </>
  );
}