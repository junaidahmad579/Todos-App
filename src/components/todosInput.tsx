'use client'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PlusIcon } from 'lucide-react'




const TodosInput = () => {

    const [todoItem, setTodoItem] = useState('');

    const handlePost=async ()=>{
        const response = await fetch("/api/todo",{
            method: "POST",
            body: JSON.stringify({todoItem}),
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },    
        })
    }

  return (

    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle className='flex justify-center item-center'>TODO APP</CardTitle>
        <CardDescription className='flex justify-center item-center'>Enter your daily task here.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Input id="todo" placeholder="Enter your todos here" 
              value={todoItem}
              onChange={(e) => setTodoItem(e.currentTarget.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button 
        type='submit'
        onClick={handlePost}
        >
            <PlusIcon/>    
            ADD
        </Button>
      </CardFooter>
    </Card>
  )
}


export default TodosInput