"use client"
import { StyledHeading } from "@/helpers/styled-components";
export default function NotFound() {
    return (
        <div className="p-3 mt-5 mb-60 justify-around uppercase">
            <StyledHeading>error</StyledHeading>
            <h1 className="text-3xl mx-10 my-3">oh...</h1>
            <h1 className="text-3xl mx-10  my-3 mt-10">It seems like something went wrong,</h1>
            <h1 className="text-3xl mx-10">You can use the navigation bar to get back on track!</h1>
        </div>
    );
  }