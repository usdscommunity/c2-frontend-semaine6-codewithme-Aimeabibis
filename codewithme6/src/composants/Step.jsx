

function Step ({number, title}) {
    return (
        <div className="flex gap-4  ">
            <span className="bg-primary-blue-200 w-8 h-8 rounded-full inline-grid place-items-center">{number}</span>
            <div className="flex flex-col  uppercase">
                <span className="text-xs text-neutral-500">step {number}</span>
                <strong className="text-white"> {title}</strong>
            </div>

        </div>
    );
}
export default Step;