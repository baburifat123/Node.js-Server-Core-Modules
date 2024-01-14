
const Credit = ({price, credit,coursename}) => {
   
    return (
        <div className="w-[600px]">
            <div className="drop-shadow bg-white p-4">
            <h1 className="text-[18px] text-blue-500 font-bold">Credit Hour Remaining 7 hr</h1>
               <p className=" mt-4"> <hr /></p>
                <div className="space-y-5">
                <p className="mt-5 font-bold text-[20px]">Course Name</p>
                 <p className="text-[18px] font-semibold text-slate-500 p-2"> {coursename}</p>
                 <h1 className="text-[18px] font-semibold text-slate-500">Total Credit Hour : {credit}</h1>
                 <h1 className="text-[18px] font-semibold text-slate-500">Total Price : {price}USD</h1>
                </div>
            </div>
        </div>
    );
};

export default Credit;