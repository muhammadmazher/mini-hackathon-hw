export default function DetailForm () {
    return (
        <div className="pb-60">
        <h1 className="text-4xl pt-16  font-semibold text-center uppercase text-blue-700 ">
            enter your details
        </h1>

        <div>
            <form className="mt-10 flex gap-5 justify-center items-center flex-col">

                <input type="Text" className="p-2 rounded-xl w-2/6 border border-blue-600"
                placeholder="Enter Your Name" />

                <input type="email" className="p-2 rounded-xl w-2/6 border border-blue-600"
                placeholder="Enter your Email" />

                <input type="password" className="p-2 rounded-xl w-2/6 border border-blue-500" 
                placeholder="Enter Your Contact No." />

                <textarea name="" id="" className="p-2 pt-2 pb-12 w-2/6 rounded-xl  border border-blue-500" placeholder="Write your Queries"></textarea>

                
            </form>
            <div className="mt-10 flex gap-5 justify-center items-center flex-col">
            <a href="Detail-Form/thank"><button className="py-3 px-10 rounded-lg pb-
                bg-blue-600 text-white hover:bg-blue-700">Place your Oder</button></a>
            </div>
        </div>
    
    </div>


    );

}