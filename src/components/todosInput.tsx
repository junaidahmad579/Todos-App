'use client'
import React, { Suspense, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PlusIcon } from 'lucide-react'
import ViewTodos from './viewTodos'
import { Skeleton } from './ui/skeleton'


type props={}

const TodosInput = ({}:props) => {

    const [todoItem, setTodoItem] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    
    const getTodo =async () => {
      setIsLoading(true);
      const response = await fetch('/api/todo');
       const res = await response.json();
        setTodoList(res.message)
        setIsLoading(false);
      };

  useEffect(()=>{
    getTodo();
    setTodoItem("");
  },[])


    const handlePost=async ()=>{
        const response = await fetch("/api/todo",{
            method: "POST",
            body: JSON.stringify({todoItem}),
            headers:{
                "content-type": "application/json; charset=UTF-8"
            },    
        })
          const res = await response.json();
          getTodo();
          setTodoItem("");
      }

      
      


  return (
    <div>
    <Card className='w-[700px]'>
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
    <div>

      { isLoading? (
         <div className="flex items-center space-x-4 justify-center mt-8">
         <Skeleton className="h-12 w-12 rounded-full" />
         <div className="space-y-2">
         <Skeleton className="h-4 w-[400px]" />
           <Skeleton className="h-4 w-[350px]" />
           <Skeleton className="h-4 w-[300px]" />
         </div>
       </div>
      ):
      todoList.length > 0? (
        <ViewTodos todoList={todoList}/>
      ):(
        <p className='font-bold text-center justify-center mt-4'>No todo found</p>
      )
        
      }

    </div>
    

    </div>
  
  )

}

export default TodosInput