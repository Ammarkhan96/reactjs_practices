"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";

export default function Home() {
  let ref = useRef()

  return (
 <div>
  <form ref={ref} action={(e) => {submitAction(e); ref.current.reset()}}>
    <div className="text-center pt-4">
      <label htmlFor="name">Name </label>
      <input name="name" id="name" className=" border border-gray-400 " type="text" />
    </div>

    <div  className="text-center pt-2">
      <label htmlFor="address">Address </label>
      <input name="address" id="address" className=" border border-gray-400" type="text" />
    </div>

    <div className="text-center pt-2">
      <button>Submit</button>
    </div>
  </form>
 </div>
  );
}
