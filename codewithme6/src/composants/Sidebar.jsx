import "../styles/index.css";
import Step from "./Step.jsx";

function Sidebar() {
    const Steps = [
        {
            number:1,
            title: "your info",
        },
        {
            number:2,
            title: "select plan",
        },
        {
            number:3,
            title: "add-ons",
        },
        {
            number:4,
            title: "summary"
        }
    ]



    return (
        
        <div className="w-xs flex flex-col gap-4 rounded-md p-8 bg-[url(/src/assets/images/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat bg-center ">
           {
            Steps.map(({ number, title }) => (
                <Step key={number} number={number} title={title} />
            ))
           }

            
        </div>
    );
}
export default Sidebar;