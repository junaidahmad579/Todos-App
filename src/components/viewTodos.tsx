import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from './ui/button'
import { Ghost, Pencil, Trash2 } from 'lucide-react'

type props = {
  todoList:any
  // getTodo: ()=>void;
}


const ViewTodos = ({todoList}:props) => {
  return (
    <div className='mt-4 '>
    <Table className='justifiy-between items-center'>
      {/* <TableCaption>A list of your recent todos.</TableCaption> */}
      <TableHeader>
        <TableRow>
          <TableHead className="font-extrabold w-[90%] text-black">Todos List</TableHead>
          <TableHead className='font-extrabold items-center text-center text-black'>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {todoList.map((item:any) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium text-black">{item.title}</TableCell>
            <div className=' flex gap-2'>
              <Button >
                <Pencil className='font-sm size-4 mr-1'/>
                Edit</Button>
              <Button className='bg-red-600 hover:bg-red-600'>
              <Trash2 size={16}/>
                Delete</Button>
            </div>
            
          </TableRow>
         ))} 
      </TableBody>
    </Table>
    </div>
  )
}

export default ViewTodos

