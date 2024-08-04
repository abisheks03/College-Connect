"use client"

import { Button, buttonVariants } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { ChangeEvent, useState } from "react";

const Events = () => {

  return (
    <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Add an Event</h1>
        <div className="mt-6"></div>
        <Input placeholder="Event name" type="text" id="eventName"/>
        <div className="mt-6"></div>
        <Input placeholder="Upload Event Poster" id="eventImage" type="file" className="mt-2"/>
        <div className="mt-6"></div>
        <Button  className="w-full" >
          Submit
        </Button>   
      </div>    
    </div>

  );
};

export default Events;
