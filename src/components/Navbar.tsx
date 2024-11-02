import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
          <div className="bg-slate-800 text-white border-b border-opacity-50  border-slate-50 flex justify-between px-60 py-1">
            <div>
              <a href="">Download app via sms</a>
            </div>
            <ul className="flex space-x-4  py-1">
              <li><Link href="/">Sign In</Link></li>
              <li><Link href="/">Sign Up</Link></li>
            </ul>
          </div>
      <nav className="bg-slate-800 justify-center items-center text-white h-13 px-40 flex">

        <div className=" flex px-8">
        
        <Link href="/">
        <Image
          src="/Pw.png"
          alt="Logo"
          width={200}
          height={53}
          className=" py-2" />
        </Link>
          
        </div>

        <div className="">
            <ul className="flex  items-center pt-4">
                <li className="flex px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Used Cars</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/newcars">New Cars</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Bikes</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Auto Store</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Videos</Link></li>
                <li className="px-6 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Fourms</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">Blog</Link></li>
                <li className="px-5 py-1.5 items-center hover:text-red-600 hover:bg-white"><Link href="/">More</Link></li>
                <li className="space-x-4 bg-red-600 py-1 px-7 items-center hover:text-red-600 font-semibold hover:bg-white"><Link href="/">Post An Ad</Link></li>
            </ul>
        </div>
      </nav>
        
     
  
 
    </div>
  );
}